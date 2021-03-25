import { ListItem } from '../ListItem/index.js';
export var ListChatContainer = function (props) {
    var arrayChats = props.arrayChats;
    var chats = arrayChats.map(function (chat) {
        return ListItem(chat);
    });
    return chats;
};
//# sourceMappingURL=index.js.map