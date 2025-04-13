import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/auth/account-created.styles';
import { useNavigation } from '@react-navigation/native';

const AccountCreated = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.oval} />

        {/* Welcome Text */}
        <Text style={styles.passText}>Welcome to GoodWork</Text>
        <Text style={styles.sentText}>
          Your Account has been created with us. Let's explore the jobs :)
        </Text>

        {/* Profile Setup Button */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('profilescreen')}
        >
          <Text style={styles.signInText}>Set Up Your Profile</Text>
        </TouchableOpacity>

        {/* AI Bot Info */}
        <Text style={styles.btmText}>
          Use GoodWork AI Bot to Set Your Profile
        </Text>
      </View>
    </View>
  );
};

export default AccountCreated;
