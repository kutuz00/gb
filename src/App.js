import './styles/App.sass';
import Message from './Message';
import { useEffect, useState } from 'react';
function App() {
  const [messages, setMessages] = useState([]);
  const [value, setText] = useState('')

  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, { text: value, author: 'Human' }]);
    setText("");
  };

  const textInput = (e) => {
    setText(e.target.value);
  };

  const botResponce = (bot) => { return bot = { text: 'Howdy, Human', author: 'Bot' } };


  useEffect(() => {
    setTimeout(() => {
      if (messages[messages.length - 1]?.author === 'Human') {
        setMessages((prevMessages) => [...prevMessages, botResponce()]);

      }
    }, 1500)

  }, [messages]);

  return (
    <div className="App">
      <div className="chat">
        <form className="form" onSubmit='#'><textarea className='input' cols="50" rows="10" type="text" value={value} onChange={textInput} />
          <button className='button' type="reset" onClick={addMessage}>Send Message</button></form>


        <div className="messageList">{messages.map((message) => <Message messageList={message} />)}</div>

      </div>

    </div >

  );
}

export default App;
