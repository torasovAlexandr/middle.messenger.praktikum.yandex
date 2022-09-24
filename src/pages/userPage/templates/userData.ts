import styles from './userData.module.scss';
import {input} from '../../../types/templateTypes';

type userField = {
  data: string;
  editMode: boolean;
} & input;

const userField = ({label, data, editMode, type, name}: userField) => `
<div class="${styles.container}">
<p>${label}</p>
<input name="${name}" type="${type}" value="{{${data}}}" ${
  !editMode ? 'disabled' : ''
} />
</div>

 
`;

export const userData = (editMode: boolean, fields: input[]) => {
  return `
<div class="${styles.wrapper}">
${fields.reduce((prev, cur) => {
  const {name} = cur;
  return prev + userField({...cur, editMode, data: name});
}, '')}
</div>`;
};
