import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, FONT_SIZE, SPACING, Weights } from '../../theme/styles/spacing';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style ={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.profileContent}>

      
      <Text style= {styles.topHeading}>Let's Set Up Your Profile Avatar or Image</Text>

      <View style={styles.profileContainer}>

      </View>
      </View>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.top,
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  skipText : {
    color : COLORS.primaryDark,
    fontSize : FONT_SIZE.sm,
    fontWeight : Weights.medium
  },
  profileContent : {
    display : "flex",
    justifyContent : "center",
    alignItems : 'center',
    gap : 50
  },
  topHeading : {
    fontWeight : Weights.medium,
    fontSize : FONT_SIZE.xl,
    color : COLORS.black,
    textAlign : 'center',
    paddingTop : SPACING.xxl,
    paddingBottom : SPACING.xxl
  },
  profileContainer : {
    width : 130,
    height : 130,
    backgroundColor : COLORS.lightGray,
    borderRadius : "50%",
    display : "flex",
    alignItems : 'center',
    justifyContent : 'center',
  }
});
