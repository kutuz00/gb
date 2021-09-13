import './styles/App.sass';
import { Form } from './Form';
import { Message } from './Message';
import { ChatList } from './ChatList';
import { useCallback, useEffect, useState } from 'react';
import uuidv4 from "uuid";
import { useParams } from 'react-router-dom';

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
    [{ chatName: "Example 1", chatId: uuidv4() },
    { chatName: "Example 2", chatId: uuidv4() }];
function Chats() {
    const { chatId } = useParams();
    const [messages, setMessages] = useState(defaultMessages);
    const [chats] = useState(defaultChats);
    const sendMessage = useCallback((message) => {
        setMessages((prevMess) => ({
            ...prevMess,
            [chatId]: [
                ...prevMess[chatId], message
            ],
        }));
    }, [chatId]);

    useEffect(() => {
        let timeout;
        const currentMessages = messages[chatId];
        console.log(messages)
        if (currentMessages[currentMessages.length - 1]?.author === "Human") {
            timeout = setTimeout(() => {
                sendMessage({
                    messageText: "Howdy, Human",
                    author: "Bot",
                    id: uuidv4()
                });
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, []);
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
            {!!chatId && (<> <div className="messageList">{messages[chatId].map((message) =>

                < Message message={message} key={message.id} />
            )}
                <Form onSubmit={addMessage} /></div></>)}

        </div >
    )
}

export default Chats;
