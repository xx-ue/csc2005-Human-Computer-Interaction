import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SeniorNavigation from './components/SeniorNavigation';
import JuniorNavigation from './components/JuniorNavigation';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={ LoginScreen } options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="SeniorNavigation" component={ SeniorNavigation } options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="JuniorNavigation" component={ JuniorNavigation } options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator