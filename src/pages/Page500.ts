import Block from '../utils/Block';
import {ErrorPage} from '../containers/errorContainer';

export class Page500 extends Block {
  constructor() {
    super('div');
  }

  protected init() {
    this.children = {
      content: new ErrorPage({
        errorMessage: 'Мы уже фиксим',
        errorCode: '500',
        link: '/',
      }),
    };
  }

  render() {
    return this.compile(`{{{content}}}`, this.props);
  }
}
