import Block from '../../utils/Block';
import {errorTemplate} from './errorTemplate';

import {NavMenu} from '../../components/navMenu';

type props = {
  errorCode: string;
  errorMessage: string;
  link: string;
};

export class ErrorPage extends Block {
  constructor(props: props) {
    super('div', props);
  }

  init() {
    this.children = {
      navMenu: new NavMenu({}),
    };
  }

  render() {
    return this.compile(errorTemplate, this.props);
  }
}
