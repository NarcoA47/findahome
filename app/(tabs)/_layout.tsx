import 'react-native-gesture-handler'; // Ensure this is at the top
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import TenantHomeScreen from '../screens/tenantHomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <Stack.Navigator screenOptions={{headerShown: false,}} initialRouteName="Home">
        <Stack.Screen name="Home" component={TenantHomeScreen}/>
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
