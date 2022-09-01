import Block from '../../../../utils/Block';
import {template} from './template';

type props = {
  events: {
    submit: (e: SubmitEvent) => void;
  };
};

export class MessageInput extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
