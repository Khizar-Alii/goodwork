import { View, Alert } from "react-native";
import React from "react";
import { ThemeProvider } from "./contexts/themeContext";
import CustomButton from "./components/CustomButton";
import TestingLocalization from "./theme/i18n/TestingLocalization";
import { I18nextProvider } from 'react-i18next';
import i18n from './theme/i18n/i18n';

const App = () => {
  const handlePress = () => {
    Alert.alert("Button Pressed!");
  };

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
      <View>
        <CustomButton title="Click Me" onPress={handlePress} />
        <TestingLocalization />
      </View>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;

