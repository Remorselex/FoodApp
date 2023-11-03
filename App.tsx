import {SafeAreaProvider} from 'react-native-safe-area-context';

import React from 'react';

import MainStack from './src/navigation/stack/main/MainStack';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
}

export default App;
