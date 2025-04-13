import React from "react";
import { ThemeProvider } from "./contexts/themeContext";
import { I18nextProvider } from 'react-i18next';
import i18n from './theme/i18n/i18n';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/root.navigation";

const App = () => {
 

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
      <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;

