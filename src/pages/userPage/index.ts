import {userPageTemPlate} from './templates/userPageTemPlate';
import Block from '../../utils/Block';
import {SideMenu} from './components/sideMenu';

// type props = {
//   avatarSrc?: string;
//   userName?: string;
// };

export class UserPage extends Block {
  constructor() {
    super('div');
  }

  init() {
    this.children = {
      sideMenu: new SideMenu({}),
    };
  }

  render() {
    return this.compile(userPageTemPlate, this.props);
  }
}
