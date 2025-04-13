import { Text, View } from "react-native";
import React from "react";
import { ThemeProvider } from "./contexts/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <View>
        <Text>App</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
