 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  MapView,
} from 'react-native';
import stylesheet from '../stylesheet';

export default ( React : Object ) => rs( React ).compose({
  init () {
  },

  render () {
    console.log("render")
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
        />
      </View>
    );
  },
});

const styles = stylesheet({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  map: {
    flex: 1,
    margin: 20,
    borderColor: '#aaaaaa',
    borderWidth: 1,
  },
});

