import {ChatPage} from '../pages/chatPage';

const root = document.querySelector('#root');

const chatPage = new ChatPage({
  errorMessage: 'Мы уже фиксим',
  errorCode: '500',
  link: '/google',
});

const contend = chatPage.getContent();
if (root && contend) root.append(contend);

chatPage.dispatchComponentDidMount();
