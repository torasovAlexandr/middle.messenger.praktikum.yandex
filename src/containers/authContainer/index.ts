import {input} from '../../types/templateTypes';
import Block from '../../utils/Block';
import {AuthInput} from './components/authInput';
import {template} from './template';
import {Link} from '../../components/link';
import Router from '../../utils/Router';
import {NavMenu} from '../../components/navMenu';

type props = {
  formId: string;
  formTitle: string;
  submitBtnText: string;
  bottomLink: string;
  bottomLinkText: string;
  fields: {[key: string]: input};
  events?: {
    submit?: (e: SubmitEvent) => void;
  };
};

export class AuthorizationPage extends Block {
  constructor(props: props) {
    super('div', props);
  }

  init() {
    const fields: {[key: string]: input} = this.props.fields;
    const res: {[key: string]: AuthInput} = {};
    Object.entries(fields).forEach((el) => {
      res[el[0]] = new AuthInput(el[1]);
    });

    this.children = {
      ...res,
      link: new Link({
        text: this.props.bottomLinkText,
        events: {
          click: () => {
            Router.go(this.props.bottomLink);
          },
        },
      }),
      navMenu: new NavMenu({}),
    };
  }

  render() {
    return this.compile(template(this.props.fields), this.props);
  }
}
