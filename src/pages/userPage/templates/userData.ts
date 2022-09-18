import styles from './userData.module.scss';
import {input} from '../../../types/templateTypes';

type userField = {
  data: string;
  editMode: boolean;
} & input;

const userField = ({label, data, editMode, type, name}: userField) => `
<div class="${styles.container}">
<p>${label}</p>
<input name="${name}" type="${type}" value="${data}" ${
  !editMode ? 'disabled' : ''
} />
</div>


`;

export const userData = (editMode: boolean, fields: input[]) => `
<div class="${styles.wrapper}">
${fields.reduce((prev, cur) => {
  const {label} = cur;
  return prev + userField({...cur, editMode, data: label});
}, '')}
</div>`;
