import block from '../../../../utils/Block';
import {template} from './template';
import {ChatListItem} from '../../components/chatListItem';
import {chatItem} from './types/chatItem';

type props = {
  chatList: {[key: string]: chatItem};
};

export class ChatList extends block {
  constructor(props: props) {
    super('div', props);
  }

  init() {
    const res: {[key: string]: ChatListItem} = {};
    const list = this.props.chatList as {[key: string]: chatItem};

    Object.entries(list).forEach(
      (el) => (res[el[0]] = new ChatListItem(el[1]))
    );

    this.children = {...res};
  }

  render() {
    return this.compile(template(this.props.chatList), this.props);
  }
}
