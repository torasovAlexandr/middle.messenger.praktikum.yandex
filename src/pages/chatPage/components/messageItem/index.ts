import block from '../../../../utils/Block';
import {message_t} from '../../container/chat/types/message';
import {template} from './template';

type props = message_t;

export class MessageItem extends block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template(this.props.isMy), this.props);
  }
}
