import { DeviceEventEmitter, NativeAppEventEmitter, Platform } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const EventEmitter = Platform.select({
  ios: () => NativeAppEventEmitter,
  android: () => DeviceEventEmitter,
})();

  BackgroundTimer.start(1000);

  EventEmitter.addListener('backgroundTimer', () => {
	// this will be executed once after 5 seconds
	console.log('toe');
});


// export default class TimerTest extends React.Component {
//   render () {
//     return (
//       <Text style={styles.textInfo}>
//
//       </Text>
//     );
//   }
// }

const styles = StyleSheet.create({
  textInfo: {
    marginTop: "12%",
    alignSelf: "center",
    fontSize: 14
  }
);
