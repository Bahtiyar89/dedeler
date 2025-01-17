import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigation from './src/navigation/AppNavigation';

function App(): React.JSX.Element {
  return <AppNavigation />;
}

export default App;
