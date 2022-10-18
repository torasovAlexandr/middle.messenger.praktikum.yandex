import Block from '../../utils/Block';
import {template} from './template';
import {UserLink} from './components/userLink';
import {Search} from './components/search';
// import {Chat} from './container/chat';
import {ChatList} from './container/chatList';
// import {messageMock} from './container/chat/mock/message';
import {withStore} from '../../utils/Store';
import {NavMenu} from '../../components/navMenu';

// type props = {};

export class ChatPage extends Block {
  constructor(pops: any) {
    console.log('props');
    super('div', pops);
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
      // chat: new Chat({messages: messageMock, companion: {}}),
      chatList: new ChatList({chatList: this.props}),
      navMenu: new NavMenu({}),
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default (() => {
  return withStore((state) => ({...state.chats}))(ChatPage);
})();
