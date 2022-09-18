import styles from './style.module.scss';

export const template = `
<div class="${styles.wrapper}">
    <div class="${styles.menu}">
        {{{userLink}}}
        {{{search}}}
        {{{chatList}}}
    </div>
    </div></div></div>
    <div class="${styles.container}">
        {{{chat}}}
     </div>
</div>`;
