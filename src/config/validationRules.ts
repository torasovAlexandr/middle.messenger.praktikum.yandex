import { isEmpty } from '../lib/helpers/myDash'

export default [{
  name: 'isEmail',
  message: 'Не правильный формат email',
  check: (value: string) => value
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}, {
  name: 'isPassword',
  message: 'Хотя бы одна заглавная буква, цифра, минимум 8 символов, максимум 40',
  check: (value: string) => /(?<!\S)(?=\S{8,40}(?!\S))\S*(\d\S*[A-ZА-ЯЁ]|[A-ZА-ЯЁ]\S*\d)\S*/.test(value)
}, {
  name: 'isPhone',
  message: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса',
  check: (value: string) => /^\+*\d{10,15}$/.test(value)
}, {
  name: 'isNotEmpty',
  message: 'Поле не должно быть пустым',
  check: (value: string) => !!value
}, {
  name: 'isLogin',
  message: 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  check: (value: string) => /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(value)
}, {
  name: 'isName',
  message: 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  check: (value: string) => /^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/.test(value)
}, {
  name: 'isEmpty',
  message: '',
  check: (value: string) => !isEmpty(value)
}]
