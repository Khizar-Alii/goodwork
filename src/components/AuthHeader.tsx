import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TextStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {
  COLORS,
  SPACING,
  Weights,
  Z_INDEX,
} from "../theme/styles/spacing";

// Interface for the Header component props
interface HeaderProps {
  title: string;
  textStyle?: TextStyle;
}

const AuthHeader: React.FC<HeaderProps> = ({ title, textStyle }) => {
  // Hook to access the navigation object
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        {/* <Icon name="arrow-back" size={FONT_SIZE.xl} color={COLORS.black} /> */}
      </TouchableOpacity>
      <Text style={[styles.topHeading, textStyle]}>{title}</Text>
    </>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: SPACING.top,
    left: SPACING.lg,
    zIndex: Z_INDEX.dropdown,
  },
  topHeading: {
    fontSize: 20,
    fontWeight: Weights.bold,
    marginTop: SPACING.xxxl,
    color: COLORS.black,
  },
});
