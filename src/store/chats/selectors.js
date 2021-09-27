export const selectChats = (state) => state.chats.chatList;
export const selectChatsLength = (state) => state.chats.chatList.length;
export const selectFirstChatId = (state) => state.chats.chatList?.[0].id;
export const selectIfChatExists = (id) => (state) =>
    !!state.chats.chatList.find((chat) => id === chat.id);