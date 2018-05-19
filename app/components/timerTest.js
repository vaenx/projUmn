import { DeviceEventEmitter, NativeAppEventEmitter, Platform } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';


export default class TimerTest extends React.Component {
  render () {
    return (
      <Text style={styles.textInfo}>

      </Text>
    );
  }
}

const styles = StyleSheet.create({
  textInfo: {
    marginTop: "12%",
    alignSelf: "center",
    fontSize: 14
  }
);
