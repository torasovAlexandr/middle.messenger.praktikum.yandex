import {authorizationPage} from '../pages/authorizationPage';
import {loginFields} from '../pages/authorizationPage/const/formInputsArr';


const root= document.querySelector('#root');
const pageLogIn=authorizationPage({
  formTitle: 'Вход',
  formId: 'logInForm',
  submitBtnText: 'Авторизоваться',
  bottomLink: '/',
  bottomLinkText: 'Нет аккаунта?',
  fields: loginFields,
});
root.append(pageLogIn);
