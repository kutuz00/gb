import './styles/App.sass';
import { Form } from './Form';
import { Message } from './Message';
import { ChatList } from './ChatList';
import { useCallback, useEffect, useState } from 'react';
import uuidv4 from "uuid";
import { Routes } from './Routes';


const defaultMessages = [
  { messageText: "Lorem ", author: "Human", id: uuidv4() },
  { messageText: "Lorem Epsum", author: "Human", id: uuidv4() }]
const defaultChats = [
  { chatName: "Example 1", id: uuidv4() },
  { chatName: "Example 2", id: uuidv4() }]
function App() {
  const [messages, setMessages] = useState(defaultMessages);
  const [chats] = useState(defaultChats);

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === "Human") {
      timeout = setTimeout(() => setMessages((prevMessages) =>
        [...prevMessages, { messageText: "Howdy, Human", author: "Bot", id: uuidv4() }]), 3000);
    }
    return () => clearTimeout(timeout);
  }, [messages]);
  const addMessage = useCallback((messageText) => {
    setMessages(prevMess => [...prevMess, { messageText, author: "Human", id: uuidv4() }]);
  }, []);




  return (


    <div className="App">
      <><Routes /></>
      <ChatList chats={chats} />

      <div className="messageList">{messages.map((message) =>

        < Message message={message} key={message.id} />
      )}
        <Form onSubmit={addMessage} /></div>


    </div >
  )
}

export default App;
