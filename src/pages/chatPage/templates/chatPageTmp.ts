// language=hbs
import {noChatPlug} from './noChatPlug';
import {chatMenu} from './chatMenu';
import {chat} from './chat';

type props={
 chats:any[];
 messages?:any[];
}

export const chatPageTmp =({messages, chats}:props)=> `
    <main>
        ${chatMenu}
        ${messages? chat : noChatPlug()}
    </main>
`;
