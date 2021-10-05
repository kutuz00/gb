import './styles/App.sass';
import { Form } from './Form';
import { Message } from './Message';
import { ChatList } from './ChatList';
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';
import { addBotMessage, initMessages, messagesToDb } from './store/messages/actions';
import { selectIfChatExists } from './store/chats/selectors'
import { addChat, deleteChat, initChats } from './store/chats/actions';
import { useEffect } from 'react';

function Chats() {
    const { chatId } = useParams();
    const history = useHistory();
    const chats = useSelector((state) => state.chats.chatList);
    const messages = useSelector((state) => state.messages.messagesList);

    const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
    const chatExists = useSelector(selectChatExists);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initChats());
        dispatch(initMessages());
    }, [dispatch]);

    const sendMessage = useCallback((message, author) => {
        dispatch(messagesToDb(message, author, chatId));
    }, [chatId, dispatch]);

    const onAddMessage = useCallback((messageText) => {
        sendMessage(
            messageText, "Human",
        );
    }, [sendMessage]);

    const addNewChat = useCallback((chatName) => {
        dispatch(addChat(chatName));
    }, [dispatch]);

    const onDeleteChat = useCallback((id) => {
        dispatch(deleteChat(id));
        if (chatId !== id) {
            return;
        }
        if (chats.length === 1) {
            history.push(`/chats/${chats[0].id}`);
        }
        else {
            history.push(`/chats/`);
        }
    }, [chats, history, chatId, dispatch]);
    return (
        <div className="App">

            <ChatList chats={chats} onAddChat={addNewChat} onDeleteChat={onDeleteChat} />
            {!chatId || !chats[chatId]} < Redirect to="/chats" />

            {!!chatId && chatExists && (
                <>
                    {(Object.values(messages[chatId] || {}) || []).map((message) => (
                        <Message key={message.id} text={message.text} id={message.id} author={message.author} />
                    ))}
                    <Form onSubmit={onAddMessage} />
                </>
            )}

        </div >
    )
}

export default Chats;