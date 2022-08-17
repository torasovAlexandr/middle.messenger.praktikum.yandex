import * as Handlebars from 'handlebars';
import {RenderUtils} from '../../utils/renderUtils';
import {userPAge} from './templates/userPAge';


type props = {
  avatarSrc?: string
  userName?: string
}

export const userPage = (props: props) => {
  const template = Handlebars.compile(userPAge);
  return RenderUtils.createContainer(template(props));
};
