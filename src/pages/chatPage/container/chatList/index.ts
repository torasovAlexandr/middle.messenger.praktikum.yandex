import block from '../../../../utils/Block';
import {template} from './template';
import {ChatListItem} from '../../components/chatListItem';

import CharsApi, {Chat} from '../../../../api/CharsApi';
import {NewChat} from '../../components/newChat';
import {Validate} from '../../../../utils/Validate';
import ChatController from '../../../../controllers/ChatController';
import {titleValidate} from '../../components/newChat/validate';
import {Routes} from '../../../../index';
import Router from '../../../../utils/Router';

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

    this.children = {
      ...res,
      newChat: new NewChat({
        events: {
          submit: (data) => {
            const validData = Validate.formSubmitCheck(titleValidate)(data) as {
              title: string;
            };
            if (validData) {
              ChatController.createChat(validData);
            }
            Router.go('404');
            Router.go(Routes.Index);
          },
        },
      }),
    };
  }

  render() {
    return this.compile(template(this.props.chatList), this.props);
  }
}
