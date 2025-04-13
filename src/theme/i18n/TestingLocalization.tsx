import React from "react";
import { View, Text, Button } from "react-native";
import { useTranslation } from "react-i18next";

const TestingLocalization = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ur" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <View>
      <Text>{t("welcome")}</Text>
      <Button title={t("change_language")} onPress={toggleLanguage} />
    </View>
  );
};

export default TestingLocalization;
