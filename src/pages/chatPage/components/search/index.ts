import block from '../../../../utils/Block';
import {template} from './template';

type props = {
  events: {
    input: (e: InputEvent) => void;
  };
};

export class Search extends block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
