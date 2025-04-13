export const greenTheme = {
  background: "#e8f5e9",
  text: "#1b5e20",
  primary: "#4caf50",
};

export const purpleTheme = {
  background: "#f3e5f5",
  text: "#4a148c",
  primary: "#9c27b0",
};

export const themes = {
  green: greenTheme,
  purple: purpleTheme,
};

export type ThemeType = "green" | "purple";
export type Theme = typeof greenTheme;
