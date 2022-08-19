import {userPage} from '../pages/userPage';


const root= document.querySelector('#root');
const pageUser=userPage({userName: 'Иван'});
root.append(pageUser);
