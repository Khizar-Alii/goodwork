import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem('authToken');
};

export const setAuthToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem('authToken', token);
};

export const removeAuthToken = async (): Promise<void> => {
  await AsyncStorage.removeItem('authToken');
};
