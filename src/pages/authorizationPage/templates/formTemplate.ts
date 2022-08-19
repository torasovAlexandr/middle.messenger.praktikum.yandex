import styles from '/src/pages/authorizationPage/authtorization.module.scss';
import {input} from '../../../types/templateTypes';

export const formTemplate = (inputs: input[]) => {
  return `
<div class="${styles.wrapper}">
    <form action="" id="{{formId}}" class="${styles.container}">
        <h1>{{formTitle}}</h1>
        ${inputs.reduce((prev, cur) => {
    return prev +
        `
        <div class="${styles.formInput}">
            <p>${cur.label}</p>
            <input type="${cur.type}" name="${cur.name}">
        </div>
        `;
  }, '')}
        <button class="${styles.sbmButton}" type="submit">{{submitBtnText}}</button>
        <a href="{{bottomLink}}">{{bottomLinkText}}</a>
    </form>
</div>`;
};
