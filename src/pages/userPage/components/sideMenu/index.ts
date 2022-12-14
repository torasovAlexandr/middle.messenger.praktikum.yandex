import Block from '../../../../utils/Block';
import {sideMenu} from './template';

type props = {
  events?: {
    click?: () => void;
  };
};

export class SideMenu extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(sideMenu, this.props);
  }
}
