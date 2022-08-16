// language=hbs
import styles from './avatar.module.scss';


export const avatar = `
    <div class="${styles.wrapper}">
        <div class="${styles.imgContainer}">
            <img src="{{avatarSrc}}" alt="avatar">
        </div>
        <h1>{{userName}}</h1>
    </div>`;
