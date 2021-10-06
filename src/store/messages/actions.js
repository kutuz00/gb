import { onValue, ref, set } from "@firebase/database";
import { db } from "../../services/firebase";
import uid from 'crypto-uid';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';
export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES';

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
};

export const setMessages = (message) => ({
    type: SET_MESSAGES,
    payload: message,
});

export const initMessages = () => (dispatch) => {
    const messagesDbRef = ref(db, 'messages');
    onValue(messagesDbRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setMessages(data || {}));
    });
};
export const messagesToDb = (text, author, chatId) => (dispatch) => {
    const newId = uid(6);
    const messagesDbRef = ref(db, `messages/${chatId}/${newId}`);
    set(messagesDbRef, {
        author, text, id: newId
    });
};
