import './styles/App.sass';
import Message from './Message';
const greeting = 'Hello my Teacher, looks like it works!!!!'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={greeting} />
      </header>
    </div>

  );
}

export default App;
