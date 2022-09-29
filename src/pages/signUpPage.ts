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
        bottomLink: '/',
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

// onSubmit() {
//   const values = Object
//     .values(this.children)
//     .filter(child => child instanceof Input)
//     .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))
//
//   const data = Object.fromEntries(values);
//
//   AuthController.signup(data as SignupData);
// }
