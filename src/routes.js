import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/pages/Home'; 


const Stack = createStackNavigator();


const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default Routes;
