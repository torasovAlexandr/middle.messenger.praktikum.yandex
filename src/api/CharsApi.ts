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

export type chatAdd = {
  users: number[];
  chatId: number;
};

export class CharsApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  read(): Promise<Chat> {
    return this.http.get('/');
  }

  create(data: {title: string}): Promise<void> {
    return this.http.post('/', data);
  }

  delete(chatId: number): Promise<unknown> {
    return this.http.delete('/', {chatId});
  }

  addUsersToChat(chatAdd: chatAdd) {
    return this.http.put('/users', chatAdd);
  }

  removeUsersFromChat(chatAdd: chatAdd) {
    return this.http.delete('/users', chatAdd);
  }

  update = undefined;
}

export default new CharsApi();
