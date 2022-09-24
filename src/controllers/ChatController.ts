import API, {CharsApi, chatAdd} from '../api/CharsApi';
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

  async createChat(data: {title: string}) {
    await this.api.create(data);
    this.fetchChats();
  }

  async deleteChat(chatId: number) {
    await this.api.delete(chatId);
    this.fetchChats();
  }

  async addUsersToChat(chatAdd: chatAdd) {
    await this.api.addUsersToChat(chatAdd);
    this.fetchChats();
  }

  async removeUsersFromChat(chatAdd: chatAdd) {
    await this.api.removeUsersFromChat(chatAdd);
    this.fetchChats();
  }
}

export default new ChatController();
