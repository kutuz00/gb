export const selectMessages = (state) => state.messages.messageList;
export const selectMessagesByChatId = (chatId) => (state) =>
    state.messages.messageList[chatId];