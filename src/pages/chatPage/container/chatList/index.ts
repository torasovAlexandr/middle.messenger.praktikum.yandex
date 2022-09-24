import block from '../../../../utils/Block';
import {template} from './template';
import {ChatListItem} from '../../components/chatListItem';

import CharsApi, {Chat} from '../../../../api/CharsApi';

type props = {
  chatList: {[key: string]: Chat};
};

export class ChatList extends block {
  constructor(props: props) {
    super('div', props);
  }

  init() {
    const res: {[key: string]: ChatListItem} = {};
    const list = this.props.chatList as {[key: string]: Chat};

    Object.entries(list).forEach((el) => {
      res[el[0]] = new ChatListItem({
        ...el[1],
        events: {
          click: (e: MouseEvent) => {
            e.stopPropagation();
            CharsApi.delete(el[1].id);
          },
        },
      });
    });

    this.children = {...res};
  }

  render() {
    return this.compile(template(this.props.chatList), this.props);
  }
}
