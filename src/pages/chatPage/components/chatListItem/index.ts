import Block from '../../../../utils/Block';
import {template} from './template';
import {chatItem} from '../../container/chatList/types/chatItem';

type props = chatItem;
export class ChatListItem extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(
      template(this.props.unreadCount, this.props.lastMessageIsMy),
      this.props
    );
  }
}
