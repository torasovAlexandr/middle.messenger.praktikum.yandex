import Block from '../../../../lib/dom/Block'
import template from './template.hbs'
import { ChatItem } from './item'
import './style.css'
import { withStore } from '../../../../lib/dom/hocs/withStore'
import { ChatResponse } from '../../services/chatApi'
import ChatsController from '../../services/ChatsController'

interface ChatsListProps {
  chats: ChatResponse[];
  isLoaded?: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({ ...props })
  }

  protected init() {
    this.children.chats = this.createChats(this.props)
  }

  protected componentDidUpdate(_oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps)

    return true
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map((data) => {
      return new ChatItem({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id)
          }
        }
      })
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props })
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }))

export const ChatsList = withChats(ChatsListBase)
