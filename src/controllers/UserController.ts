import API, {updateUserDto, UserApi, userPasswordDto} from '../api/UserApi';
import AuthController from './AuthController';

export class UserController {
  private readonly api: UserApi;

  constructor() {
    this.userAPI = new UserAPI();
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
