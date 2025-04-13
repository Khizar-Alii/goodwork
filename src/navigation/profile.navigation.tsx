import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/profile/welcome-screen.tsx';
import ProfileScreen from '../screens/profile/profile-screen.tsx';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    // Stack navigator for profile-related screens
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome-screen" component={WelcomeScreen} />
      <Stack.Screen name="profilescreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
