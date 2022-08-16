import {errorPage} from './pages/errorPage';
import {authorizationPage} from './pages/authorizationPage';
import {userPage} from './pages/userPage';
import {chatPage} from './pages/chatPage';
import {singUpFields, loginFields} from './pages/authorizationPage/const/formInputsArr';


const root= document.querySelector('#root');
const page400=errorPage({errorMessage: 'Не туда попали', errorCode: '400', link: '/'});
root.append(page400);
const page500=errorPage({errorMessage: 'Мы уже фиксим', errorCode: '500', link: '/google'});
root.append(page500);
const pageLogIn=authorizationPage({
  formTitle: 'Вход',
  formId: 'logInForm',
  submitBtnText: 'Авторизоваться',
  bottomLink: '/',
  bottomLinkText: 'Нет аккаунта?',
  fields: loginFields,
});
root.append(pageLogIn);

const pageSignIn=authorizationPage({
  formTitle: 'Регистрация',
  formId: 'signInForm',
  submitBtnText: 'Авторизоваться',
  bottomLink: '/',
  bottomLinkText: 'Нет аккаунта?',
  fields: singUpFields,
});
root.append(pageSignIn);

const pageUser=userPage({userName: 'Иван'});
root.append(pageUser);
const chat=chatPage();
root.append(chat);
