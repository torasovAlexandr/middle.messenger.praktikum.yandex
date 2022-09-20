import styles from './styles.module.scss';
import {input} from '../../types/templateTypes';

export const template = (inputs: input[]) => {
  return ` 
<div class="${styles.wrapper}">
    <form action="" id="{{formId}}" class="${
      styles.container
    }" autocomplete="off">
        <h1>{{formTitle}}</h1>
     
            ${Object.keys(inputs).reduce(
              (prev, cur) => `${prev}{{{${cur}}}}`,
              ''
            )}
         
                <button class="${
                  styles.sbmButton
                }" type="submit">{{submitBtnText}}</button>
               <div class=" ${
                 styles.btnLink
               }"><a href="{{bottomLink}}">{{bottomLinkText}}</a></div> 
    </form>
      
        
</div>`;
};
