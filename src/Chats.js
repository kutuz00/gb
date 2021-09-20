import './styles/App.sass';
import { Form } from './Form';
import { Message } from './Message';
import { ChatList } from './ChatList';
import { useCallback, useEffect, useState } from 'react';
import uuidv4 from "uuid";
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router';

const defaultMessages = {
    'chat-1': [
        { messageText: "Example 1 text message ", author: "Human", id: uuidv4() },
        { messageText: "Example 2 text message ", author: "Human", id: uuidv4() }
    ],
    'chat-2': [
        [],
    ],
}
const defaultChats =
    [{ chatName: "Example 1", id: "chat-1" },
    { chatName: "Example 2", id: "chat-2" }];
function Chats() {
    const { chatId } = useParams();
    const [messages, setMessages] = useState(defaultMessages);
    const [chats, setChats] = useState(defaultChats);
    const sendMessage = useCallback((messages) => {
        setMessages((prevMess) => ({
            ...prevMess,
            [chatId]: [
                ...prevMess[chatId], messages
            ],
        }));
    }, [chatId]);
    useEffect(() => {
        let timeout;
        const currentMessages = messages?.[chatId];
        if (currentMessages?.[currentMessages.length - 1].author === "Human") {
            timeout = setTimeout(() => {
                sendMessage({
                    messageText: "Howdy, Human",
                    author: "Bot",
                    id: uuidv4()
                });
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [messages]);
    const addMessage = useCallback(
        (messageText) => {
            sendMessage({
                messageText,
                author: "Human",
                id: uuidv4()
            });

        }, [chatId, sendMessage]);
    return (
        <div className="App">

            <ChatList chats={chats} />
            {!chatId || !chats[chatId]} < Redirect to="/chats" />

            {!!chatId && (<> <div className="messageList">{messages[chatId]?.map((message) =>
                < Message key={message.id} message={message} />
            )}
                <Form onSubmit={addMessage} /></div></>)}

        </div >
    )
}

export default Chats;