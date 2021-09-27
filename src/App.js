import './styles/App.sass';
import { Provider } from 'react-redux';
import { Routes } from './Routes';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store'
import { CircularProgress } from '@material-ui/core'

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <Routes />
      </PersistGate>
    </Provider>

  )
}

export default App;
