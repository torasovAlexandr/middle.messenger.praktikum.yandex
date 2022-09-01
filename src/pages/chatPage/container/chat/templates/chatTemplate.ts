import styles from './chatTemplate.module.scss';

export const chatTemplate = (messages: {[key: string]: any}) => `
<section class="${styles.wrapper}">
{{{companion}}}</div>
<div class="${styles.messageList}">
${Object.keys(messages).reduce((prev, cur) => `${prev}{{{${cur}}}}</div>`, '')}

</div>
{{{messageInput}}}
<section> `;
