import block from '../../../../utils/Block';
import {template} from './template';

type props = {
  linkToUser: string;
};

export class UserLink extends block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
