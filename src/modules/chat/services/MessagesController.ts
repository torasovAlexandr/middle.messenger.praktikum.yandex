import WSTransport, { WSTransportEvents } from '../../../lib/chat/WSTransport'
import store from '../../../lib/dom/Store'
import { HTTPErrorHandler } from '../../../lib/http/HTTPErrorHandler'
import { wsErrors } from '../../../lib/chat/config'

export type Message = {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  }
}

class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    try {
      if (this.sockets.has(id)) {
        return
      }

      const userId = store.getState().user.id

      const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`)

      this.sockets.set(id, wsTransport)

      await wsTransport.connect()

      this.subscribe(wsTransport, id)
      this.fetchOldMessages(id)
    } catch (e) {
      e?.status ? HTTPErrorHandler.handleHttp(e) : HTTPErrorHandler.handle(wsErrors.WEBSOCKETS_CONNECT)
    }
  }

  sendMessage(id: number, message: string) {
    try {
      const socket = this.sockets.get(id)

      if (!socket) {
        HTTPErrorHandler.handleHttp(`Chat ${id} is not connected`)
      } else socket.send({ type: 'message', content: message })
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  fetchOldMessages(id: number) {
    try {
      const socket = this.sockets.get(id)

      if (!socket) {
        HTTPErrorHandler.handleHttp(`Chat ${id} is not connected`)
      } else socket.send({ type: 'get old', content: '0' })
    } catch (e) {
      HTTPErrorHandler.handleHttp(e)
    }
  }

  closeAll() {
    Array.from(this.sockets.values()).forEach((socket) => socket.close())
  }

  private static onMessage(id: number, messages: Message | Message[]) {
    let messagesToAdd: Message[] = []

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse()
    } else {
      messagesToAdd.push(messages)
    }

    const currentMessages = (store.getState().messages || {})[id] || []

    messagesToAdd = [...currentMessages, ...messagesToAdd]

    store.set(`messages.${id}`, messagesToAdd)
  }

  private onClose(id: number) {
    this.sockets.delete(id)
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, (message) => MessagesController.onMessage(id, message))
    transport.on(WSTransportEvents.Close, () => this.onClose(id))
  }
}

const controller = new MessagesController()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.messagesController = controller

export default controller
