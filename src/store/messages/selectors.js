export const selectMessages = (state) => state.messages.messagesList;
export const selectMessagesByChatId = (chatId) => (state) =>
    state.messages.messageList[chatId];