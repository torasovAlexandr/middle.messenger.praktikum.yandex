// language=hbs
import styles from '../../styles.module.scss';

export const template = `
<div class="${styles.formInput}"><p>{{label}}</p>
    <input type="{{type}}" name="{{name}}">
    <p class="error"></p>
</div>`;
