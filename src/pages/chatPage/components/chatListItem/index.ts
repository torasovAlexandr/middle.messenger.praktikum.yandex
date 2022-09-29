import Block from '../../../../utils/Block';
import {template} from './template';
import {Chat} from '../../../../api/CharsApi';

type props = {
  events: {click: (e: MouseEvent) => void};
} & Chat;
export class ChatListItem extends Block {
  constructor(props: props) {
    console.log(props);
    super('div', props);
  }

  render() {
    return this.compile(
      template(this.props.unread_count, this.props.lastMessageIsMy),
      this.props
    );
  }
}
