import API, {updateUserDto, UserApi} from '../api/UserApi';
import AuthController from './AuthController';

export class UserController {
  private readonly api: UserApi;

  constructor() {
    this.api = API;
  }

  async updateUser(data: updateUserDto) {
    await this.api.updateUser(data);
    AuthController.fetchUser();
  }

  async updateAvatar(data: any) {
    await this.api.updateAvatar(data);
    AuthController.fetchUser();
  }
}

export default new UserController();
