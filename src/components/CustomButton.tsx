import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { COLORS, FONT_SIZE, RADIUS, SPACING, Weights } from "../theme/styles/spacing";

// Define the prop types for the CustomButton component
interface CustomButtonProps {
  title: string; // Title of the button
  onPress: (event: GestureResponderEvent) => void; // Function to call when the button is pressed
  buttonStyle?: StyleProp<ViewStyle>; // Optional custom style for the button container
  textStyle?: StyleProp<TextStyle>; // Optional custom style for the text
  disabled?: boolean; // Flag to disable the button (default is false)
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled && styles.disabled]} 
      onPress={onPress}
      activeOpacity={0.7} // Reduces opacity when pressed
      disabled={disabled} // Disable the button functionality
    >
       {/* Title text with optional custom style */}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Styles for the CustomButton component
const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: RADIUS.xxl, 
    marginTop: SPACING.ssm, 
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  disabled: {
    opacity: 0.6, 
  },
  text: {
    color: COLORS.black,
    fontSize: FONT_SIZE.mmd, 
    fontWeight: Weights.bold, 
  },
});

export default CustomButton;
