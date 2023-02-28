import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from 'redux/store';

import PhoneBook from 'modules/PhoneBook/PhoneBook';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <main>
          <PhoneBook />
        </main>
      </PersistGate>
    </Provider>
  );
};

export default App;
