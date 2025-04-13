import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './auth.navigation';
import ProfileNavigator from './profile.navigation';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    // Top-level navigator managing auth and profile flows
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Profile" component={ProfileNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
