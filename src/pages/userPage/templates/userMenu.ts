import styles from './userMenu.module.scss';

type menuItem = {
  label: string;
  btnId: string;
};
const menuItem = ({label, btnId}: menuItem) => `
<div class="${styles.container}" id="${btnId}" >
        ${label}
    </div>
`;

export const userMenu = `
<div class="${styles.wrapper}">
 ${menuItem({label: 'Изменить данные', btnId: 'changeUserData'})}
 ${menuItem({label: 'Изменить пароль', btnId: 'changeUserData'})}
 ${menuItem({label: 'Выйти', btnId: 'changeUserData'})}
</div>
`;
