import {input} from '../../../types/templateTypes';


export const loginFields:input[]=[
  {name: 'login', type: 'text', label: 'Логин'},
  {name: 'password', type: 'password', label: 'Пароль'},
];

export const singUpFields:input[]=[
  {name: 'email', type: 'email', label: 'Почта'},
  {name: 'login', type: 'text', label: 'Логин'},
  {name: 'first_name', type: 'text', label: 'Имя'},
  {name: 'second_name', type: 'text', label: 'Фамилия'},
  {name: 'phone', type: 'tel', label: 'Телефон'},
  {name: 'password', type: 'password', label: 'Пароль'},
  {name: 'rePassword', type: 'password', label: 'Пароль (ещё раз)'},
];

