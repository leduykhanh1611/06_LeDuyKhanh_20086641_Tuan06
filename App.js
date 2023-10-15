import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab3a from './Screens/3a';
import Lab3b from './Screens/3b';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Lab3a} />
        <Stack.Screen name='Detail' component={Lab3b} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}