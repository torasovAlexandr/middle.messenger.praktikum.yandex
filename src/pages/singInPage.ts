import Block from '../utils/Block';
import {AuthorizationPage} from '../containers/authContainer';
import {
  loginFieldsFormValidate,
  singUpFields,
} from '../containers/authContainer/const/formInputsArr';
import {Validate} from '../utils/Validate';

export class SingInPage extends Block {
  constructor() {
    super('div');
  }

  protected init() {
    this.children = {
      content: new AuthorizationPage({
        formTitle: 'Регистрация',
        formId: 'signInForm',
        submitBtnText: 'Авторизоваться',
        bottomLink: '/',
        bottomLinkText: 'Нет аккаунта?',
        fields: singUpFields,
        events: {
          submit: Validate.formSubmitCheck(loginFieldsFormValidate),
        },
      }),
    };
  }

  render() {
    return this.compile(`{{{content}}}`, this.props);
  }
}
