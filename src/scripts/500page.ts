import {errorPage} from '../pages/errorPage';


const root= document.querySelector('#root');
const page500=errorPage({errorMessage: 'Мы уже фиксим', errorCode: '500', link: '/google'});
root.append(page500);
