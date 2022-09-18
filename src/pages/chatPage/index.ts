import Block from '../../utils/Block';
import {template} from './template';
import {UserLink} from './components/userLink';
import {Search} from './components/search';
import {Chat} from './container/chat';
import {ChatList} from './container/chatList';
import {ChatsMock} from './container/chatList/mock/chatsMock';
import {messageMock} from './container/chat/mock/message';

type props = {};

export class ChatPage extends Block {
  constructor(props: props) {
    super('div', props);
  }

  init() {
    this.children = {
      userLink: new UserLink({linkToUser: '/userPageTemPlate.html'}),
      search: new Search({
        events: {
          input: (e) => {
            const target = e.target as HTMLInputElement;
            console.dir(target.value);
          },
        },
      }),
      chat: new Chat({messages: messageMock, companion: {name: 'VasserMan'}}),
      chatList: new ChatList({chatList: ChatsMock}),
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
