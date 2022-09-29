import Block from '../../../../utils/Block';
import {menuItem} from './index.tamplate';

type props = {
  label: string;
  events: {
    click: (e: MouseEvent) => void;
  };
};

export class UserMenuItem extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(menuItem, this.props);
  }
}
