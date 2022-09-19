import Block from '../utils/Block';
import {ErrorPage} from '../containers/errorContainer';

export class Page404 extends Block {
  constructor() {
    super('div');
  }

  protected init() {
    this.children = {
      content: new ErrorPage({
        errorMessage: 'Не туда попали',
        errorCode: '400',
        link: '/',
      }),
    };
  }

  render() {
    return this.compile(`{{{content}}}`, this.props);
  }
}
