import {inputValid} from '../types/utilsTypes';

export class Events {
  static inputFocusOut = (validateFn: inputValid) => {
    return (e: FocusEvent) => {
      e.stopPropagation();
      const tar = e.target as HTMLInputElement;
      const value = tar.value;
      const children = tar.parentNode?.childNodes || [];
      children.forEach((el: HTMLElement) => {
        const classList = el.classList ? Array.from(el.classList) : [];
        if (classList.includes('error')) {
          el.innerText = validateFn(value);
        }
      });
    };
  };

  static inputFocus = (e: FocusEvent) => {
    e.stopPropagation();
    const tar = e.target as HTMLInputElement;
    const children = tar.parentNode?.childNodes || [];
    children.forEach((el: HTMLElement) => {
      const classList = el.classList ? Array.from(el.classList) : [];
      if (classList.includes('error')) {
        el.innerText = '';
      }
    });
  };
}
