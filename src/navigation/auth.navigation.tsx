import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/auth/on-boarding-screen';
import SignInScreen from '../screens/auth/signin-screen';
import ForgetPassword from '../screens/auth/forget-password-screen';
import ResetLinkScreen from '../screens/auth/reset-link-sent-screen';
import SignUpOnboard from '../screens/auth/signup-onboard-screen';
import AccountCreated from '../screens/auth/account-created-screen';
import SignupEmployee from '../screens/auth/signup-employee-screen';
import SignUpJobSeeker from '../screens/auth/signup-jobseeker-screen';

import ProfileScreen from '../screens/profile/profile-screen';
import WelcomeScreen from '../screens/profile/welcome-screen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    // Auth stack managing onboarding, auth flow, and signup
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="signup-employee" component={SignupEmployee} />
      <Stack.Screen name="signup-jobseeker" component={SignUpJobSeeker} />
      <Stack.Screen name="SignUp-onboard" component={SignUpOnboard} />
      <Stack.Screen name="account-created" component={AccountCreated} />
      <Stack.Screen name="forget-password" component={ForgetPassword} />
      <Stack.Screen name="reset-link-sent" component={ResetLinkScreen} />
      <Stack.Screen name="welcome-screen" component={WelcomeScreen} />
      <Stack.Screen name="profilescreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
