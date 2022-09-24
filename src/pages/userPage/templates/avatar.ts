// language=hbs
import styles from '../components/avatar/avatar.module.scss';

export const avatar = `
    <div class="${styles.wrapper}">
        <div class="${styles.imgContainer}">
            <img src="{{avatarSrc}}" alt="avatar">
        </div>
            <input type="file">
        <h1>
            {{login}}
        </h1>
    </div>`;
