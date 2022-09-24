import {userPageTemPlate} from './templates/userPageTemPlate';
import Block from '../../utils/Block';
import {SideMenu} from './components/sideMenu';
import {withStore} from '../../utils/Store';
import router from '../../utils/Router';
import {UserMenuItem} from './components/userMenuItem';
import AuthController from '../../controllers/AuthController';
import {Avatar} from './components/avatar';
import UserController from '../../controllers/UserController';

export class UserPage extends Block {
  constructor(pops: any) {
    super('div', pops);
  }

  init() {
    this.children = {
      sideMenu: new SideMenu({events: {click: () => router.back()}}),
      ['данные']: new UserMenuItem({
        label: 'Изменить данные',
        events: {click: () => console.log('Выйти3')},
      }),
      ['пароль']: new UserMenuItem({
        label: 'Изменить пароль',
        events: {click: () => console.log('Выйти2')},
      }),
      ['Выйти']: new UserMenuItem({
        label: 'Выйти',
        events: {
          click: (e: MouseEvent) => {
            e.stopPropagation();
            AuthController.logout();
          },
        },
      }),
      avatar: new Avatar({
        events: {
          submit: (e: SubmitEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.target) {
              // @ts-ignore
              console.dir(e.target[0]);
              // @ts-ignore
              console.dir(e.target.files);
              const formData = new FormData();
              // @ts-ignore
              formData.append('avatar', e.target[0].files[0]);
              console.log(formData.get('sss'));
              console.dir(formData);
              UserController.updateAvatar(formData);
            }
          },
        },
      }),
    };
  }

  render() {
    return this.compile(userPageTemPlate, this.props);
  }
}

export default withStore((state) => ({...state.user}))(UserPage);
