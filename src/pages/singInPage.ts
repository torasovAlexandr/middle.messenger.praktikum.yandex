import Block from '../utils/Block';
import {AuthorizationPage} from '../containers/authContainer';
import {
  loginFields,
  loginFieldsFormValidate,
} from '../containers/authContainer/const/formInputsArr';
import {Validate} from '../utils/Validate';
import {SignupData} from '../api/AuthAPI';
import AuthController from '../controllers/AuthController';

export class SingInPage extends Block {
  constructor() {
    super('div');
  }

  protected init() {
    this.children = {
      content: new AuthorizationPage({
        formTitle: 'Вход',
        formId: 'signInForm',
        submitBtnText: 'Авторизоваться',
        bottomLink: '/',
        bottomLinkText: 'Нет аккаунта?',
        fields: loginFields,
        events: {
          submit: (data) => {
            const validData = Validate.formSubmitCheck(loginFieldsFormValidate)(
              data
            ) as SignupData | undefined;
            if (validData) {
              AuthController.signin(validData).then((res) => console.log(res));
            }
          },
        },
      }),
    };
  }

  render() {
    return this.compile(`{{{content}}}`, this.props);
  }
}
