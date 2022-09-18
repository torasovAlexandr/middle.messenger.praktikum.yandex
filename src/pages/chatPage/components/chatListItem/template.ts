import styles from './style.module.scss';

export const template = (count: number, lastMessageIsMy: boolean) => `
<div class="${styles.wrapper}">
    <div class="${styles.imgContainer}" >

    </div>
    <div class="${styles.textContainer}">
    <h3>{{chatName}}</h3>
    <p>${lastMessageIsMy ? `<span>Вы: </span>` : ''}{{lastMessageText}}</p>

    </div>
    <div class="${styles.infoContainer}">
    ${count ? '{{unreadCount}}' : ''}
    </div>
</div>`;
