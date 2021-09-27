export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (chatId, message, author) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
        author
    },
});
export const deleteMessage = (chatId, message, author) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        message,
        author
    },
});