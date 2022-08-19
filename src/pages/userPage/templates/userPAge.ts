// language=hbs
import {sideMenu} from './sideMenu';
import {userContainer} from './userContainer';
import styles from './userPAge.module.scss';
export const userPAge = `
    <div class="${styles.wrapper}">
        <div class="${styles.menu}">
            ${sideMenu}
        </div>
        <main class="${styles.main}">
            ${userContainer}
        </main>
    </div>
`;

