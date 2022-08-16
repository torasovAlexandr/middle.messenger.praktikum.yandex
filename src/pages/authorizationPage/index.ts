import * as Handlebars from 'handlebars';
import {formTemplate} from './templates/formTemplate';
import {RenderUtils} from '../../utils/renderUtils';
import {input} from '../../types/templateTypes';


type props={
  formId:string,
  formTitle:string,
  submitBtnText:string,
  bottomLink:string,
  bottomLinkText:string,
  fields:input[]
}

export const authorizationPage =({fields, ...props}:props)=> {
  const template= Handlebars.compile(formTemplate(fields));
  // const template= Handlebars.compile(formTemplate(singUpFields));
  return RenderUtils.createContainer(template(props));
};
