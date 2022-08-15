import {input} from '../../../types/templateTypes';


export const userFields:input[]=[
  {name: 'email', type: 'email', label: 'Почта'},
  {name: 'login', type: 'text', label: 'Логин'},
  {name: 'first_name', type: 'text', label: 'Имя'},
  {name: 'second_name', type: 'text', label: 'Фамилия'},
  {name: 'display_name', type: 'text', label: 'Имя в чате'},
  {name: 'phone', type: 'tel', label: 'Телефон'},
];

export const passwordFields:input[]=[
  {name: 'oldPassword', type: 'password', label: 'Старый пароль'},
  {name: 'password', type: 'password', label: 'Новый пароль'},
  {name: 'rePassword', type: 'password', label: 'Повторите новый пароль'},
];
