import { AsyncStorage } from 'react-native';

export function setAppLaunched() {
  AsyncStorage.setItem('hasLaunched', 'true');
}

export function setAppLaunchedOff() {
  AsyncStorage.removeItem('hasLaunched');
}

export async function checkIfFirstLaunch() {
  try {
    const hasLaunched = await AsyncStorage.getItem('hasLaunched');
    console.log('hasLaunched load', hasLaunched);
    return false;
  } catch (error) {
    console.log('hasLaunched error', error);
    return true;
  }
}
