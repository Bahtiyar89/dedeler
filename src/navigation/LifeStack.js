import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LifeScreen from '../screens/LifeScreen';

const LifeStack = createStackNavigator();

const LifeStackScreen = () => {
  return (
    <LifeStack.Navigator screenOptions={({route}) => ({headerShown: true})}>
      <LifeStack.Screen
        name="LifeScreen"
        options={{
          title: 'Hayat',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={LifeScreen}
      />
    </LifeStack.Navigator>
  );
};

export default LifeStackScreen;
