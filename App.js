import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Components/Login';
import Home from './src/Components/Home'
import Details from './src/Components/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
 
  const Stack=createNativeStackNavigator()
  return (
      <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
   </NavigationContainer>
   
    
  );
}

const styles = StyleSheet.create({

});
