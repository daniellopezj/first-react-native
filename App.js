import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import CoinsStack from './src/components/coins/CoinsStack'
import AppContext from './src/context/AppContext';
import useInitialState from './src/hooks/useInitialState';
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from './src/res/Colors';
import FavoritesStack from './src/components/favorites/FavoritesStack'

const Tabs = createBottomTabNavigator()

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <NavigationContainer>
        <Tabs.Navigator
          tabBarOptions={{
            tintColor: "#fefefe",
            style: {
              backgroundColor: colors.blackPearl
            }
          }}
        >
          <Tabs.Screen
            name="Coins"
            component={CoinsStack}
            options={{
              tabBarIcon: ({ size, color }) =>
                <Image style={{ tintColor: color, width: size, height: size }} source={require('./src/assets/bank.png')} />
            }}>

          </Tabs.Screen>
          <Tabs.Screen
            name="Favorites"
            component={FavoritesStack}
            options={{
              tabBarIcon: ({ size, color }) =>
                <Image style={{ tintColor: color, width: size, height: size }} source={require('./src/assets/star.png')} />
            }}>

          </Tabs.Screen>
        </Tabs.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
