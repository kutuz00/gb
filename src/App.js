import './styles/App.sass';
import Message from './Message';
import { useEffect, useState, } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField, List, ListItem, Button } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "grey",
    color: "white",
  },
  label: {
    color: "white"
  }
});

const chats = [{ name: "Example" + Math.random(), id: uuidv4() },
{ name: "Example" + Math.random(), id: uuidv4() },
{ name: "Example" + Math.random(), id: uuidv4() }];
console.log(chats);
function App() {
  const [messages, setMessages] = useState([]);
  const [value, setText] = useState('');
  // const [chats, setChats] = useState([]);
  const classes = useStyles();
  // const addChat = (chatName) => [...chats, { name: chatName, id: uuidv4() }];


  const addMessage = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { text: value, author: 'Human', id: uuidv4() }]);
    e.target.reset();
  };

  const textInput = (e) => {
    setText(e.target.value);
  };

  const botResponce = (bot) => { return bot = { text: 'Howdy, Human', author: 'Bot', id: uuidv4() } };

  useEffect(() => {
    const answerTime = setTimeout(() => {
      if (messages[messages.length - 1]?.author === 'Human') {
        setMessages((prevMessages) => [...prevMessages, botResponce()]);
      }
    }, 1500);
    return () =>
      clearTimeout(answerTime);
  }, [messages]);

  return (
    <div className="App">
      <List><ListItem style={{ color: 'white' }}>Placeholder for Chat List</ListItem></List>
      <div className="chat">

        <div className="messageList">{messages.map((message, id) => <Message messageList={message} key={id} />)}</div>

        <form className="form" onSubmit={addMessage} >
          <TextField id="my-input"
            className={classes.root}
            placeholder="message"
            label="Your Message Here"
            onChange={textInput}
            inputRef={(input) => {
              if (input != null) {
                input.focus();
              }
            }}
          />
          < Button variant="contained" component="button" type="submit" > Send</Button>
        </form>
      </div>

    </div>

  );
}

export default App;
