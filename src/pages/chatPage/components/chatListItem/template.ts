import styles from './style.module.scss';

export const template = (unread_count: number, lastMessageIsMy: boolean) => {
  return `
<div class="${styles.wrapper}">
    <div class="${styles.imgContainer}" >
<img src="{{avatar}}" alt="chat">
    </div>
    <div class="${styles.textContainer}">
    <h3>{{title}}</h3>
    <p>${lastMessageIsMy ? `<span>Вы: </span>` : ''}{{last_message}}</p>

    </div>
    <div class="${styles.infoContainer}">
    ${unread_count ? '{{unreadCount}}' : ''}
    </div> 
</div>`;
};
