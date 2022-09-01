import block from '../../../../utils/Block';
import {noChatPlug} from './templates/noChatPlug';
import {chatTemplate} from './templates/chatTemplate';
import {Companion} from '../../components/companion';
import {MessageInput} from '../../components/messageInput';
import {message_t} from './types/message';
import {MessageItem} from '../../components/messageItem';
import {Validate} from '../../../../utils/Validate';

type props = {
  messages?: {[key: string]: message_t};
  companion?: {
    name: String;
  };
};

export class Chat extends block {
  constructor(props: props) {
    super('div', props);
  }

  init() {
    const res: {[key: string]: MessageItem} = {};
    const list = this.props.messages as {[key: string]: message_t};

    Object.entries(list).forEach((el) => (res[el[0]] = new MessageItem(el[1])));

    this.children = {
      companion: new Companion(this.props.companion),
      messageInput: new MessageInput({
        events: {
          submit: Validate.formSubmitCheck([
            ['message', Validate.messageCheck],
          ]),
        },
      }),
      ...res,
    };
  }

  render() {
    if (!this.props.messages) return this.compile(noChatPlug(), this.props);
    return this.compile(chatTemplate(this.props.messages), this.props);
  }
}
