import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import AuthHeader from '../../components/AuthHeader';
import styles from '../../styles/auth/signin.styles';
import CustomButton from '../../components/CustomButton';
import { COLORS, FONT_SIZE, RADIUS, SPACING } from '../../theme/styles/spacing';

const SignInScreen = () => {
  const navigation = useNavigation();

  // State for managing form input and UI behavior
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // after signin navigate to welcome-screen
  const handleSignIn = () => {
    setIsButtonPressed(!isButtonPressed);
    navigation.navigate('welcome-screen');
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    // Simple email validation
    if (text && !/\S+@\S+\.\S+/.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <AuthHeader title="Welcome Back 👋" />

      {/* Email input */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/email.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="What is your email?"
          placeholderTextColor="#666666"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Password input */}
      <View style={styles.inputContainer}>
        <Icon
          name="lock-closed"
          size={24}
          color="#666666"
          style={styles.icon}
        />
        <TextInput
          placeholder="What is your password?"
          placeholderTextColor="#666666"
          style={styles.input}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {password ? (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="#666666"
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Remember me checkbox and Forgot Password */}
      <View style={styles.bottomContainer}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={[styles.checkbox, isChecked && styles.checked]}
          >
            {isChecked && <Text style={styles.tick}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.rememberMe}>Remember me</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('forget-password')}
        >
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In button */}
      <CustomButton
        title="Sign In"
        onPress={handleSignIn}
        buttonStyle={{
          backgroundColor: isButtonPressed ? COLORS.primaryDark : COLORS.primaryLight,
          paddingVertical: SPACING.ssm,
          borderRadius: RADIUS.xl,
          alignItems: 'center',
          marginTop: SPACING.xxl,
          borderWidth: 0,
        }}
        textStyle={{
          color: 'black',
          fontSize: FONT_SIZE.md,
          fontWeight: 'bold',
        }}
      />

      {/* Social login divider */}
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.line} />
      </View>

      {/* Social login buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../assets/images/facebook-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../assets/images/google-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
      </View>
      {/* Sign up navigation */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>New to GoodWork? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp-onboard')}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
