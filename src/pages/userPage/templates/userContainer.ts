import {userData} from './userData';
import styles from './userContainer.module.scss';
import {userMenu} from './userMenu';
import {userFields} from '../const/formInputsArr';

export const userContainer = `
<div class="${styles.wrapper}">

    <div class="${styles.container}">
{{{avatar}}}

        ${userData(true, userFields)}
        ${userMenu}
    </div>
</div>`;
