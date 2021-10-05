import { DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";
import { DELETE_MESSAGE } from "./actions";
import { SET_MESSAGES } from "./actions";
import uid from 'crypto-uid';

const initialState = {
    messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messagesList[action.payload.chatId] || [];
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.payload.chatId]: [
                        ...currentList,
                        {
                            ...state.messagesList,
                            id: `${action.payload.chatId}${uid(6)}`,
                            messageText: action.payload.message,
                            author: action.payload.author

                        },
                    ],
                },
            };
        }
        case DELETE_MESSAGE: {
            const newChatMessages = state.messagesList[action.chatId].filter(
                ({ id }) => id !== action.id);
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.chatId]: newChatMessages,
                },
            };
        }
        case DELETE_CHAT: {
            const newMessages = { ...state.messagesList };
            delete state.messagesList[action.id];
            return {
                ...state,
                messagesList: {
                    newMessages
                },
            };
        };
        case SET_MESSAGES:
            return {
                ...state,
                messagesList: action.payload,
            };

        default:
            return state;
    }
};
