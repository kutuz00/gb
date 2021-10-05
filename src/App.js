import './styles/App.sass';
import { Provider } from 'react-redux';
import { Routes } from './Routes';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store'

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>

  )
}

export default App;
