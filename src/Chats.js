import './styles/App.sass';
import { Form } from './Form';
import { Message } from './Message';
import { ChatList } from './ChatList';
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';
import { addBotMessage } from './store/messages/actions';
import { selectIfChatExists } from './store/chats/selectors'
import { addChat, deleteChat } from './store/chats/actions';

function Chats() {
    const { chatId } = useParams();
    const history = useHistory();
    const chats = useSelector((state) => state.chats.chatList);
    const messages = useSelector(state => state.messages.messageList);
    const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
    const chatExist = useSelector(selectChatExists);
    const dispatch = useDispatch();

    const sendMessage = useCallback((message, author) => {
        dispatch(addBotMessage(chatId, message, author));
    }, [chatId, dispatch]);

    const onAddMessage = useCallback(
        (messageText) => {
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

            {!!chatId && chatExist && (<div className="messageList">{(messages[chatId] || []).map((message, id) =>
                (< Message message={message} key={id} />)
            )}
                <Form onSubmit={onAddMessage} /></div>)
            }

        </div >
    )
}

export default Chats;