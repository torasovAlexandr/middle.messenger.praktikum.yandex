import Block from '../../../../utils/Block';
import {avatar} from './template';

type props = {
  events?: {
    submit?: (e: any) => void;
  };
};

export class Avatar extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(avatar, this.props);
  }
}
