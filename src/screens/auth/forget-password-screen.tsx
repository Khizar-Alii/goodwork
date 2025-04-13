import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthHeader from '../../components/AuthHeader';
import styles from '../../styles/auth/forget-password.styles';
import { COLORS, Weights } from '../../theme/styles/spacing';

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
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

  const handlePress = () => {
    setIsButtonPressed(!isButtonPressed);
    navigation.navigate('reset-link-sent');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <AuthHeader
        title="Forgot Your Password? Don't worry, it happens."
        textStyle={{ fontWeight: Weights.medium }}
      />

      {/* Email Input */}
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

      {/* Bottom Container */}
      <View style={styles.btmContainer}>
        {/* Send Reset Link Button */}
        <TouchableOpacity
          style={[styles.signInButton, isButtonPressed && styles.buttonPressed]}
          onPress={handlePress}
        >
          <Text
            style={[
              styles.signInText,
              { color: isButtonPressed ? COLORS.white : COLORS.black },
            ]}
          >
            Send Reset Link
          </Text>
        </TouchableOpacity>

        {/* Contact Info */}
        <View style={{ marginVertical: 20 }}>
          <Text style={[styles.btmText, { marginBottom: 4 }]}>
            Don't remember your email?
          </Text>
          <Text style={styles.btmText}>
            Contact us at{' '}
            <Text style={styles.btmTextMail}>help@goodwork.asia</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ForgetPassword;
