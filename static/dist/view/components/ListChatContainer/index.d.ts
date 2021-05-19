declare type ListItemProps = {
    name: string;
    text: string;
    time: string;
    count: string;
    link: string;
};
declare type ListChatProps = {
    arrayChats: Array<ListItemProps>;
};
declare type ItemElement = {
    type: string;
    props: any;
};
export declare const ListChatContainer: (props: ListChatProps) => ItemElement[];
export {};
