import uid from 'crypto-uid';
import { ADD_CHAT, SET_CHATS } from "./actions";
import { DELETE_CHAT } from "./actions";

const initialState = {
    chatList: [],
};

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: uid(6),
                        name: payload,
                    },
                ],
            };
        case DELETE_CHAT:
            const newChats = state.chatList.filter(({ id }) => id !== payload);
            return {
                ...state,
                chatList: newChats,
            };
        case SET_CHATS:
            return {
                ...state,
                chatList: payload,
            };
        default:
            return state;
    }
};
