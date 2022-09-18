import {chatItem} from '../types/chatItem';

export const ChatsMock: {[key: string]: chatItem} = {
  chatId0: {
    chatName: 'chatName0',
    lastMessageText: 'lastMessage',
    lastMessageIsMy: false,
    unreadCount: 2,
  },
  chatId1: {
    chatName: 'chatName1',
    lastMessageText: 'lastMessage',
    lastMessageIsMy: false,
    unreadCount: 2,
  },
  chatId2: {
    chatName: 'chatName1',
    lastMessageText: 'lastMessage',
    lastMessageIsMy: false,
    unreadCount: 0,
  },
  chatId3: {
    chatName: 'chatName1',
    lastMessageText:
      'lastMessage lastMessage lastMessage   lastMessagesasasasasasass lastMessage lastMessage ' +
      'lastMessage lastMessage lastMessage lastMessage',
    lastMessageIsMy: true,
    unreadCount: 3,
  },
};
