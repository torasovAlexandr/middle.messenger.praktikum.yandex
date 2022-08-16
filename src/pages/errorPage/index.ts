import * as Handlebars from 'handlebars';
import {errorTemplate} from './errorTemplate';
import {RenderUtils} from '../../utils/renderUtils';

type props ={
    errorCode:string,
    errorMessage:string,
    link:string,
}

export const errorPage=(props:props)=>{
  const template= Handlebars.compile(errorTemplate);
  return RenderUtils.createContainer(template(props));
};

