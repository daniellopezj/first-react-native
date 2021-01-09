import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import CoinsStack from './src/components/coins/CoinsStack'
import AppContext from './src/context/AppContext';
import useInitialState from './src/hooks/useInitialState';
const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <NavigationContainer>
        <CoinsStack />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
