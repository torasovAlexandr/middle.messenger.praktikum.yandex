import {inputValid} from '../types/utilsTypes';

export class Validate {
  private static long = (
    value: string = '',
    min: number = 1,
    max: number = value.length
  ) => {
    const length = value.length;

    if (length < min) return 'toShort';
    if (length > max) return 'toLong';
  };

  static loginCheck: inputValid = (value) => {
    const longTest = this.long(value, 3, 20);
    if (longTest === 'toShort') return 'Слишком короткий логин';
    if (longTest === 'toLong') return 'Слишком длинный логин';

    const letterTest = value.match(/[a-z]/i);
    if (!letterTest) return 'В логине должна быть хотя бы одна буква';

    const regTest = value.match(/^[\w-]{3,20}$/);
    if (!regTest) return 'Недопустимые символы';

    return '';
  };

  static nameCheck: inputValid = (value) => {
    const longTest = this.long(value);
    if (longTest === 'toShort') return 'Поле не должно быть пустым';

    const letterTest = value[0].match(/[A-ZА-Я]/);
    if (!letterTest) return 'Начните с заглавной буквы';

    const regTest = value.match(/^[A-ZА-Я][a-zа-я-]*$/);
    if (!regTest) return 'Недопустимые символы';

    return '';
  };

  static passwordCheck: inputValid = (value) => {
    const longTest = this.long(value, 8, 40);
    if (longTest === 'toShort') return 'Слишком короткий пароль';
    if (longTest === 'toLong') return 'Слишком длинный пароль';

    const letterTest = value.match(/[A-Z]/);
    if (!letterTest) return 'Пароль должен содержать хотя бы одну заклавную';

    const numberTest = value.match(/\d/);
    if (!numberTest) return 'Пароль должен содержать хотя бы одну цифру';

    return '';
  };

  static messageCheck: inputValid = (value) => {
    const longTest = this.long(value);
    if (longTest === 'toShort') return 'Слишком короткое сообщение';

    return '';
  };

  static phoneCheck: inputValid = (value) => {
    const regTest = value.match(/^\+*\d{10,14}$/);
    if (!regTest) return 'Неверный номер';

    return '';
  };

  static emailCheck: inputValid = (value) => {
    const regTest = value.toLowerCase().match(
      // eslint-disable-next-line max-len
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!regTest) return 'Неверный email';
    return '';
  };

  static formSubmitCheck = (validate?: [string, inputValid][]) => {
    return (e: SubmitEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.target as HTMLFormElement;
      if (!target) return;
      const formData = new FormData(target);

      validate?.forEach((el) => {
        const value = formData.get(el[0]);
        if (typeof value === 'string') {
          const noValid = el[1](value);
          if (noValid) console.log(noValid);
        } else console.log(`Ошибка в поле ${el[0]}`);
      });
      formData.forEach((el) => {
        console.log(el);
      });
    };
  };
}
