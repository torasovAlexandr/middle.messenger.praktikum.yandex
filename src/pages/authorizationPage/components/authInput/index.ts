import Block from '../../../../utils/Block';
import {template} from './template';
import {input} from '../../../../types/templateTypes';

interface props extends input {}

export class AuthInput extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
