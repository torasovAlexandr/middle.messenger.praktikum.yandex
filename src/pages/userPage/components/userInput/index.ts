import Block from '../../../../utils/Block';
import {userData} from '../../templates/userData';
import {userFields} from '../../const/formInputsArr';

type props = {};

export class UserInput extends Block {
  constructor(props: props) {
    super('div', props);
  }

  render() {
    return this.compile(userData(true, userFields), this.props);
  }
}
