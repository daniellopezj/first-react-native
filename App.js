import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import CoinsStack from './src/components/coins/CoinsStack'
import AppContext from './src/context/AppContext';
import useInitialState from './src/hooks/useInitialState';
import useAuthState from './src/hooks/useAuthState';
import { Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from './src/res/Colors';
import FavoritesStack from './src/components/favorites/FavoritesStack'
import AuthStack from './src/components/auth/AuthStack'

const Tabs = createBottomTabNavigator()

const App = () => {

  const initialState = useInitialState()
  const useAuth = useAuthState()
  const { isLogin } = useAuth.state

  return (
    <AppContext.Provider value={initialState}>
      {  isLogin
        ? <NavigationContainer>
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
        : <NavigationContainer>
          <AuthStack />
        </NavigationContainer>

      }
    </AppContext.Provider>
  );
};

export default App;
