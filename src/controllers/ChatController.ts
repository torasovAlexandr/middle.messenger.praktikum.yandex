import API, {CharsApi} from '../api/CharsApi';
import store from '../utils/Store';

export class ChatController {
  private readonly api: CharsApi;

  constructor() {
    this.api = API;
  }

  async fetchChats() {
    const chats = await this.api.read();

    try {
      store.set('chats', chats);
    } catch (e) {
      console.log(e);
    }
  }

  async createChat() {
    await this.api.create();
    this.fetchChats();
  }

  async deleteChat(chatId: number) {
    await this.api.delete(chatId);
    this.fetchChats();
    console.log(212);
  }
}

export default new ChatController();
