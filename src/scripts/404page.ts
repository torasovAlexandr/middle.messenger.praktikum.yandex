import {errorPage} from '../pages/errorPage';


const root= document.querySelector('#root');
const page400=errorPage({errorMessage: 'Не туда попали', errorCode: '400', link: '/'});

root.append(page400);
