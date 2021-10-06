import { onValue, ref, set } from "@firebase/database";
import { db } from "../../services/firebase";
import uid from 'crypto-uid';
export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name,
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});
export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
});

export const initChats = () => (dispatch) => {
    const chatsDbRef = ref(db, 'chats');
    onValue(chatsDbRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setChats(Object.values(data || {})));
    });
};

export const addChatToDb = (name) => () => {
    const chatId = uid(6);
    const chatsDbRef = ref(db, `chats/${chatId}`);
    set(chatsDbRef, {
        id: chatId,
        name,
    });
}