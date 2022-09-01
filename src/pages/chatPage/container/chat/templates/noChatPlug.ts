import styles from './noChatPlug.module.scss';

export const noChatPlug = (plug = 'Выберите чат чтобы отправить сообщение') => `
    <section class="${styles.wrapper}">
        <div class="${styles.plug}">
            ${plug}
        </div> 
    </section>`;
