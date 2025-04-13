import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthHeader from '../../components/AuthHeader';
import styles from '../../styles/auth/signup-employee.styles.ts';
import CustomButton from '../../components/CustomButton.tsx';
import { COLORS, FONT_SIZE, RADIUS, SPACING, Weights } from '../../theme/styles/spacing.ts';

const SignupEmployee = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [passworderror, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text && !/\S+@\S+\.\S+/.test(text)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text && text.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleCreateAccount = () => {
    setIsButtonPressed(!isButtonPressed);
    if (!name || !email || !password) {
      setError('Please fill the required details');
    } else {
      setError('');
      navigation.navigate('account-created');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.mainErrorWrap}>
        {error ? <Text style={styles.mainErrorText}>{error}</Text> : null}
      </View>

      <AuthHeader title="Join GoodWork and start your journey" />

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/account.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="What should we call you?"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
          keyboardType="default"
          value={name} 
          onChangeText={(value) => setName(value)}
        />
        
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/email.png')}
          style={styles.icon}
        />
        <TextInput
          placeholder="What is your email?"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <View style={styles.inputContainer}>
        <Icon
          name="lock-closed"
          size={24}
          color={COLORS.gray}
          style={styles.icon}
        />
        <TextInput
          placeholder="Create a secure password?"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={handlePasswordChange}
        />
        {password ? (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={24}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {passworderror ? (
        <Text style={styles.errorText}>{passworderror}</Text>
      ) : null}

      <CustomButton
        title="Create Account"
        onPress={handleCreateAccount}
        buttonStyle={{
          backgroundColor: isButtonPressed ? COLORS.primaryDark : COLORS.primaryLight,
          paddingVertical: SPACING.ssm,
          borderRadius: RADIUS.xl,
          alignItems: 'center',
          marginTop: SPACING.top,
          borderWidth : 0
        }}
        textStyle={{
          color: COLORS.black,
          fontSize: FONT_SIZE.md,
          fontWeight: Weights.bold,
        }}
      />

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.line} />
      </View>

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

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signUpLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupEmployee;
