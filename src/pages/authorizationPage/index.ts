import * as Handlebars from 'handlebars';
import {formTemplate} from './templates/formTemplate';
import {RenderUtils} from '../../utils/renderUtils';
import {loginFields, singUpFields} from './const/formInputsArr';


type props={
  formId:string,
  formTitle:string,
  submitBtnText:string,
  bottomLink:string,
  bottomLinkText:string,
}

export const authorizationPage =(props:props)=> {
  const template= Handlebars.compile(formTemplate(loginFields));
  // const template= Handlebars.compile(formTemplate(singUpFields));
  return RenderUtils.createContainer(template(props));
};
