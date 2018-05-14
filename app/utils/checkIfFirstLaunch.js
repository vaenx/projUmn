import { AsyncStorage } from 'react-native';

export function setAppLaunched() {
  AsyncStorage.setItem('hasLaunched', 'true');
}

export async function checkIfFirstLaunch() {
  try {
    const hasLaunched = await AsyncStorage.getItem('hasLaunched');
    return (hasLaunched === null);
  } catch (error) {
    return true;
  }
}
