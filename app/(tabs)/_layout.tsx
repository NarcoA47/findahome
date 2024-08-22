import 'react-native-gesture-handler'; // Ensure this is at the top
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import TenantHomeScreen from '../screens/tenantHomeScreen';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false }}>
      <Tab.Screen name="Explore" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="search1" size={24} color="black" />
        ),
      }}
      component={TenantHomeScreen}/>
      <Tab.Screen name="Whishlist" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="hearto" size={24} color="black" />
        ),
      }}
      component={TenantHomeScreen}/>
      <Tab.Screen name="Messages" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="message" size={24} color="black" />
        ),
      }}
      component={TenantHomeScreen}/>
      <Tab.Screen name="Profile" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={24} color="black" />
        ),
      }}
      component={TenantHomeScreen}/>
      <Tab.Screen name="Settings" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="settings" size={24} color="black" />
        ),
      }}
      component={TenantHomeScreen}/>
    </Tab.Navigator>
    
  );
}

export default function TabLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{  headerShown: false }} initialRouteName="HomeTabs">
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
