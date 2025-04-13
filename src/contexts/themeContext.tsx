// src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themes, ThemeType, Theme } from "../theme/styles/theme";

interface ThemeContextProps {
  theme: Theme;
  themeType: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeType, setThemeType] = useState<ThemeType>("green");

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("appTheme");
      if (saved === "green" || saved === "purple") {
        setThemeType(saved);
      }
    })();
  }, []);

  const toggleTheme = async () => {
    const newTheme = themeType === "green" ? "purple" : "green";
    setThemeType(newTheme);
    await AsyncStorage.setItem("appTheme", newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeType], themeType, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
