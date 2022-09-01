import styles from './style.module.scss';

export const template = (isMy: boolean) =>
  `<div class="${styles.wrapper} ${isMy ? styles.wrapperMy : ''}">
<div class="${styles.container} ${
    isMy ? styles.containerMy : ''
  }">{{message}}</div></div>`;
