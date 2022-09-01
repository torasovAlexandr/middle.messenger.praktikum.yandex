import {input} from '../../../types/templateTypes';
import {Events} from '../../../utils/Events';
import {Validate} from '../../../utils/Validate';
import {inputValid} from '../../../types/utilsTypes';

export const singUpFields: {[key: string]: input} = {
  emailField: {
    name: 'email',
    type: 'email',
    label: 'Почта',
    events: {
      focusout: Events.inputFocusOut(Validate.emailCheck),
      focusin: Events.inputFocus,
    },
  },
  loginField: {
    name: 'login',
    type: 'text',
    label: 'Логин',
    events: {
      focusout: Events.inputFocusOut(Validate.loginCheck),
      focusin: Events.inputFocus,
    },
  },
  firstNameField: {
    name: 'first_name',
    type: 'text',
    label: 'Имя',
    events: {
      focusout: Events.inputFocusOut(Validate.nameCheck),
      focusin: Events.inputFocus,
    },
  },
  secondNameField: {
    name: 'second_name',
    type: 'text',
    label: 'Фамилия',
    events: {
      focusout: Events.inputFocusOut(Validate.nameCheck),
      focusin: Events.inputFocus,
    },
  },
  phoneField: {
    name: 'phone',
    type: 'tel',
    label: 'Телефон',
    events: {
      focusout: Events.inputFocusOut(Validate.phoneCheck),
      focusin: Events.inputFocus,
    },
  },
  passwordField: {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    events: {
      focusout: Events.inputFocusOut(Validate.passwordCheck),
      focusin: Events.inputFocus,
    },
  },
  rePasswordField: {
    name: 'rePassword',
    type: 'password',
    label: 'Пароль (ещё раз)',
    events: {
      focusout: Events.inputFocusOut(Validate.passwordCheck),
      focusin: Events.inputFocus,
    },
  },
};

export const singUpFieldsFormValidate: [string, inputValid][] = [
  ['email', Validate.emailCheck],
  ['login', Validate.loginCheck],
  ['first_name', Validate.nameCheck],
  ['second_name', Validate.nameCheck],
  ['phone', Validate.phoneCheck],
  ['password', Validate.passwordCheck],
  ['rePassword', Validate.passwordCheck],
];

export const loginFields: {[key: string]: input} = {
  nameField: {
    name: 'login',
    type: 'text',
    label: 'Логин',
    events: {
      focusout: Events.inputFocusOut(Validate.nameCheck),
      focusin: Events.inputFocus,
    },
  },
  passwordField: {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    events: {
      focusout: Events.inputFocusOut(Validate.passwordCheck),
      focusin: Events.inputFocus,
    },
  },
};

export const loginFieldsFormValidate: [string, inputValid][] = [
  ['login', Validate.loginCheck],
  ['password', Validate.passwordCheck],
];
