import block from '../../../../utils/Block';
import {template} from './template';

type props = {
  events: {
    submit?: (e: SubmitEvent) => void;
  };
};

export class NewChat extends block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
