import styles from './style.module.scss';

export const template = `

<form class="${styles.wrapper}" action="">

<input type="text/" name="message" class="${styles.inputBlock}" placeholder="Сообщение">

<button type="submit" class="${styles.btnBlock}">&#10141</button>
</form>`;
