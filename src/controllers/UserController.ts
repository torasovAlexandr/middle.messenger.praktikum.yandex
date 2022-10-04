import {updateUserDto, UserApi, userPasswordDto} from '../api/UserApi';
import AuthController from './AuthController';

export class UserController {
  private readonly api: UserApi;
  userAPI: any;

  constructor() {
    this.userAPI = new UserApi();
  }

  async updateUser(data: updateUserDto) {
    await this.api.updateUser(data);
    AuthController.fetchUser();
  }

  async updateAvatar(data: any) {
    await this.api.updateAvatar(data);
    AuthController.fetchUser();
  }

  async updatePassword(data: userPasswordDto) {
    await this.api.updatePassword(data);
    AuthController.fetchUser();
  }
}

export default new UserController();
