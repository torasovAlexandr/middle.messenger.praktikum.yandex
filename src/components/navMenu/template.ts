import styles from './index.module.scss';

export const template = (Routes: object) => {
  const a = Object.keys(Routes).reduce(
    (prev, cur) => `${prev}{{{${cur}}}}`,
    ''
  );
  return `<div class="${styles.wrapper}">${a}</div>`;
};
