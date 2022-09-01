import Block from '../../../../utils/Block';
import {sideMenu} from './template';

type props = {};

export class SideMenu extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(sideMenu, this.props);
  }
}
