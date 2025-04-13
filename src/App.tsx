import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { ThemeProvider } from "./contexts/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <View>
        <Text style={styles.heading}>App</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Quicksand-Bold",
  },
});
