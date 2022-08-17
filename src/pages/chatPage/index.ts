import * as Handlebars from 'handlebars';
import {RenderUtils} from '../../utils/renderUtils';
import {chatPageTmp} from './templates/chatPageTmp';


export const chatPage = () => {
  const template = Handlebars.compile(chatPageTmp({chats: []}));
  return RenderUtils.createContainer(template({}));
};


