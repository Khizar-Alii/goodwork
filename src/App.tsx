import { View, Alert } from "react-native";
import React from "react";
import { ThemeProvider } from "./contexts/themeContext";
import CustomButton from "./components/CustomButton";

const App = () => {
  const handlePress = () => {
    Alert.alert("Button Pressed!");
  };

  return (
    <ThemeProvider>
      <View>
        <CustomButton title="Click Me" onPress={handlePress} />
      </View>
    </ThemeProvider>
  );
};

export default App;

