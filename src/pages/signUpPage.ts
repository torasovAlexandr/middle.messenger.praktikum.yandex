import Block from '../utils/Block';
import {AuthorizationPage} from '../containers/authContainer';
import {
  singUpFields,
  singUpFieldsFormValidate,
} from '../containers/authContainer/const/formInputsArr';
import {Validate} from '../utils/Validate';
import {SignupData} from '../api/AuthAPI';
import AuthController from '../controllers/AuthController';

export class SignUpPage extends Block {
  constructor() {
    super('div');
  }

  protected init() {
    this.children = {
      content: new AuthorizationPage({
        formTitle: 'Регистрация',
        formId: 'logInForm',
        submitBtnText: 'Авторизоваться',
        bottomLink: '/login',
        bottomLinkText: 'Нет аккаунта?',
        fields: singUpFields,
        events: {
          submit: (data) => {
            const validData = Validate.formSubmitCheck(
              singUpFieldsFormValidate
            )(data) as SignupData | undefined;
            if (validData) {
              AuthController.signup(validData).then((res) => console.log(res));
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
