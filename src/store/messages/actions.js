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
let timeout;
export const addBotMessage = (chatId, message, author) => (dispatch) => {
    dispatch(addMessage(chatId, message, author));
    if (author === 'Human') {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            dispatch(addMessage(chatId, "Howdy, Human", "Bot"));
        }, 3000);

    }
}
