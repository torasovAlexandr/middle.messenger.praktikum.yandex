// language=hbs
import {userContainer} from './userContainer';
import styles from './userPAge.module.scss';
export const userPAge = `<div class="${styles.wrapper}">
          <div>{{{sideMenu}}}</div>
        <main class="${styles.main}">${userContainer}</main>
    </div>
    
`;
