import Block from '../../../../utils/Block';
import {template} from './template';

type props = {
  name: string;
};
export class Companion extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
