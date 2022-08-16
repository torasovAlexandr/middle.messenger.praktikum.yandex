import styles from './error.module.scss';

export const errorTemplate=`<div class="${styles.wrapper}">
    <div class="${styles.container}">
        <h1 class="${styles.erCode}">{{errorCode}}</h1>
        <p class="${styles.erMessage}">{{errorMessage}}</p>
        <a class="${styles.linkBack}" href="{{link}}">назад к чатам</a>
    </div>
</div>`;
