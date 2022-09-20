import Router from '../utils/Router';
import {ChatPage} from '../pages/chatPage';
import AuthController from '../controllers/AuthController';
import {Page404} from '../pages/page404';
import {Page500} from '../pages/Page500';
import {SignUpPage} from '../pages/signUpPage';
import {SingInPage} from '../pages/singInPage';
import {UserPage} from '../pages/userPage';

enum Routes {
  Index = '/',
  notFound = '/404',
  error = '/500',
  signIn = '/login',
  signUp = '/signup',
  user = '/user',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.Index, ChatPage)
    .use(Routes.notFound, Page404)
    .use(Routes.error, Page500)
    .use(Routes.signIn, SingInPage)
    .use(Routes.signUp, SignUpPage)
    .use(Routes.user, UserPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.notFound:
    case Routes.error:
    case Routes.signIn:
    case Routes.signUp:
    case Routes.user:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.notFound);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
