import {
  loginFields,
  singUpFieldsFormValidate,
} from '../pages/authorizationPage/const/formInputsArr';

const root = document.querySelector('#root');

import {AuthorizationPage} from '../pages/authorizationPage';
import {Validate} from '../utils/Validate';

const pageSignIn = new AuthorizationPage({
  formTitle: 'Вход',
  formId: 'logInForm',
  submitBtnText: 'Авторизоваться',
  bottomLink: '/',
  bottomLinkText: 'Нет аккаунта?',
  fields: loginFields,
  events: {
    submit: Validate.formSubmitCheck(singUpFieldsFormValidate),
  },
});

const contend = pageSignIn.getContent();
if (root && contend) root.append(contend);

pageSignIn.dispatchComponentDidMount();
