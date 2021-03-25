import { ListItem } from '../ListItem/index';

type ListItemProps = {
    name: string;
    text: string;
    time: string;
    count: string;
    link: string;
};
type ListChatProps = {
    arrayChats: Array<ListItemProps>;
};

type ItemElement = {
    type: string;
    props: any;
};

export const ListChatContainer = (props: ListChatProps) => {
    const { arrayChats } = props;
    const chats: Array<ItemElement> = arrayChats.map((chat: ListItemProps) => {
        return ListItem(chat);
    });
    return chats;
};
