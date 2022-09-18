import {ErrorPage} from '../pages/errorPage';

const root = document.querySelector('#root');

const page400 = new ErrorPage({
  errorMessage: 'Не туда попали',
  errorCode: '400',
  link: '/',
});

const content = page400.getContent();
if (root && contend) root.append(contend);

page400.dispatchComponentDidMount();
