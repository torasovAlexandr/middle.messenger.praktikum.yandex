import {authorizationPage} from '../pages/authorizationPage';
import {singUpFields} from '../pages/authorizationPage/const/formInputsArr';


const root= document.querySelector('#root');
const pageSignIn=authorizationPage({
  formTitle: 'Регистрация',
  formId: 'signInForm',
  submitBtnText: 'Авторизоваться',
  bottomLink: '/',
  bottomLinkText: 'Нет аккаунта?',
  fields: singUpFields,
});
root.append(pageSignIn);
