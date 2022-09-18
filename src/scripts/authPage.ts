import {AuthorizationPage} from '../pages/authorizationPage';
import {
  loginFieldsFormValidate,
  singUpFields,
} from '../pages/authorizationPage/const/formInputsArr';
import {Validate} from '../utils/Validate';

const root = document.querySelector('#root');

const pageSignIn = new AuthorizationPage({
  formTitle: 'Регистрация',
  formId: 'signInForm',
  submitBtnText: 'Авторизоваться',
  bottomLink: '/',
  bottomLinkText: 'Нет аккаунта?',
  fields: singUpFields,
  events: {
    submit: Validate.formSubmitCheck(loginFieldsFormValidate),
  },
});

const contend = pageSignIn.getContent();
if (root && contend) root.append(contend);

pageSignIn.dispatchComponentDidMount();
