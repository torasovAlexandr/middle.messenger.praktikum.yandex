import Block from '../../utils/Block';
import {errorTemplate} from './errorTemplate';

type props = {
  errorCode: string;
  errorMessage: string;
  link: string;
};

export class ErrorPage extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(errorTemplate, this.props);
  }
}
