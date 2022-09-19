import Block from '../utils/Block';
import {AuthorizationPage} from '../containers/authContainer';
import {
  loginFields,
  singUpFieldsFormValidate,
} from '../containers/authContainer/const/formInputsArr';
import {Validate} from '../utils/Validate';

export class SignUpPage extends Block {
  constructor() {
    super('div');
  }

  protected init() {
    this.children = {
      content: new AuthorizationPage({
        formTitle: 'Вход',
        formId: 'logInForm',
        submitBtnText: 'Авторизоваться',
        bottomLink: '/',
        bottomLinkText: 'Нет аккаунта?',
        fields: loginFields,
        events: {
          submit: Validate.formSubmitCheck(singUpFieldsFormValidate),
        },
      }),
    };
  }

  render() {
    return this.compile(`{{{content}}}`, this.props);
  }
}
