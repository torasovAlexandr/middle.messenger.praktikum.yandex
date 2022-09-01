import {UserPage} from '../pages/userPage';

const root = document.querySelector('#root');

const pageSignIn = new UserPage({userName: 'Иван'});

const contend = pageSignIn.getContent();
if (root && contend) root.append(contend);

pageSignIn.dispatchComponentDidMount();
