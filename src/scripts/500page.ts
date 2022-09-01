const root = document.querySelector('#root');

import {ErrorPage} from '../pages/errorPage';

const page500 = new ErrorPage({
  errorMessage: 'Мы уже фиксим',
  errorCode: '500',
  link: '/google',
});

const contend = page500.getContent();
if (root && contend) root.append(contend);

page500.dispatchComponentDidMount();
