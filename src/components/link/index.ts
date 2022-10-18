import Block from '../../utils/Block';
import {template} from './template';

type props = {
  text: string;
  events?: {
    click?: (e: MouseEvent) => void;
  };
};

export class Link extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
