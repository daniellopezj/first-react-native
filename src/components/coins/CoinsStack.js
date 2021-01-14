
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CoinDetailScreen from "../coinDetail/CoinDetailScreen";
import CoinsScreen from "./CoinsScreen";
import Colors from '../../res/Colors'

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blackPearl,
        shadowColor: Colors.blackPearl,
      },
      headerTitleAlign: 'center',
      headerTintColor: Colors.white,

    }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};
export default CoinsStack;
