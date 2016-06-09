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
    this.state = {
    };
  },

  render () {
    return (
      <View style={styles.container}>
      </View>
    );
  },
});

const styles = stylesheet({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

