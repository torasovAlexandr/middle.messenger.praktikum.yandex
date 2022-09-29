import BaseAPI from './BaseAPI';

export type updateUserDto = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type userPasswordDto = {
  oldPassword: string;
  newPassword: string;
};

export class UserApi extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateAvatar(file: any) {
    return this.http.put('/profile/avatar', file);
  }

  updateUser(data: updateUserDto) {
    return this.http.post('/profile', data);
  }

  updatePassword(data: userPasswordDto) {
    return this.http.post('/password', data);
  }

  update = undefined;
  create = undefined;
  read = undefined;
  delete = undefined;
}

export default new UserApi();
