import {inputValid} from '../../../../types/utilsTypes';
import {Validate} from '../../../../utils/Validate';

export const titleValidate: [string, inputValid][] = [
  ['title', Validate.messageCheck],
];
