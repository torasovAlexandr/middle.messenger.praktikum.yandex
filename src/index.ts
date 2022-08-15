// import {errorPage} from './pages/errorPage';
import {authorizationPage} from './pages/authorizationPage';


const root= document.querySelector('#root');
// const page400=errorPage({errorMessage: 'Не туда попали', errorCode: '400', link: '/'});
// const page500=errorPage({errorMessage: 'Мы уже фиксим', errorCode: '500', link: '/google'});
const pageAuth=authorizationPage({
  formTitle: 'Вход',
  formId: 'authForm',
  submitBtnText: 'Авторизоваться',
  bottomLink: '/',
  bottomLinkText: 'Нет аккаунта?',
});

root.append(pageAuth);
