
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLogin from "./AuthLogin";
import Colors from '../../res/Colors'

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blackPearl,
        shadowColor: Colors.blackPearl,
      },
      headerTitleAlign: 'center',
      headerTintColor: Colors.white,

    }}>
      <Stack.Screen name="Login" component={AuthLogin} />
    </Stack.Navigator>
  );
}

export default AuthStack
