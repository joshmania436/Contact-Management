import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation' 
import AddScreen from './screens/AddScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  SignUp:{screen:SignUpScreen},
  Add:{screen:AddScreen},
  Home:{screen:HomeScreen}
}) 

const AppContainer =createAppContainer(SwitchNavigator)
