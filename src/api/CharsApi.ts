import BaseAPI from './BaseAPI';

export type Chat = {
  id: number;
  title: string;
  avatar: string;
  unread_count: 15;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
};
export class CharsApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(): Promise<Chat> {
    return this.http.get('/');
  }

  create(): Promise<void> {
    const title = new Date().toLocaleDateString();
    return this.http.post('/', {title});
  }

  delete(chatId: number): Promise<unknown> {
    return this.http.delete('/', {chatId});
  }

  update = undefined;
}

export default new CharsApi();
