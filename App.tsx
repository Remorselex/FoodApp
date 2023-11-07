import React from 'react';
import MainStack from './src/navigation/stack/main/MainStack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

export default App;
