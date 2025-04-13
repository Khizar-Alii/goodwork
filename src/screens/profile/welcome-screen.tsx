import { Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../../styles/auth/account-created.styles';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.oval} />
        <Text style={styles.passText}>Welcome to GoodWork</Text>
        <Text style={styles.sentText}>
        We're excited about finding your dream job! Let's complete your profile setup to get started 😊
        </Text>
        <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate("profilescreen")}>
          <Text style={[styles.signInText]}>Set Up Your Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen
