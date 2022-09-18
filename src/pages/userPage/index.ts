import * as Handlebars from 'handlebars';
import {RenderUtils} from '../../utils/renderUtils';
import {userPageTemPlate} from './templates/userPageTemPlate';
import Block from '../../utils/Block';
import {SideMenu} from './components/sideMenu';

type props = {
  avatarSrc?: string;
  userName?: string;
};

export const userPage = (props: props) => {
  const template = Handlebars.compile(userPageTemPlate);
  return RenderUtils.createContainer(template(props));
};

export class UserPage extends Block {
  constructor(props: props) {
    super('div', props);
  }

  init() {
    this.children = {
      sideMenu: new SideMenu({}),
    };
  }

  render() {
    return this.compile(userPage, this.props);
  }
}
