import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/auth/reset-link-sent.styles';

const ResetLinkScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <View style={styles.oval} />
        <Text style={styles.passText}>Password Reset Sent.</Text>
        <Text style={styles.sentText}>
          We've sent you an email containing password recovery link.
        </Text>

        {/* Reset Link Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetLinkScreen;
