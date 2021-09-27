import { DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";
import { DELETE_MESSAGE } from "./actions";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]}
    messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.payload.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [
                        ...currentList,
                        {
                            ...state.messageList,
                            id: `${action.payload.chatId}${uuidv4()}`,
                            messageText: action.payload.message,
                            author: action.payload.author

                        },
                    ],
                },
            };
        }
        case DELETE_MESSAGE: {
            const newChatMessages = state.messageList[action.chatId].filter(
                ({ id }) => id !== action.id);
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: newChatMessages,
                },
            };
        }
        case DELETE_CHAT: {
            const newMessages = { ...state.messageList };
            delete state.messageList[action.id];
            return {
                ...state,
                messagesList: {
                    newMessages
                },
            };
        }

        default:
            return state;
    }
};
