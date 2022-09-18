// language=hbs
import {userContainer} from './userContainer';
import styles from './userPAge.module.scss';
export const userPageTemPlate = `<div class="${styles.wrapper}">
          <div>{{{sideMenu}}}</div>
        <main class="${styles.main}">${userContainer}</main>
    </div>
    
`;
