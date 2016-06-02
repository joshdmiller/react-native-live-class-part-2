 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  Alert,
} from 'react-native';
import stylesheet from '../stylesheet';
import ButtonFactory from '../demos/Button';

export default ( React : Object ) => {
  const Button = ButtonFactory( React );

  return rs( React ).compose({
    _info () {
      Alert.alert(
        'Info',
        'These messages are some bad UX.',
        [
          {
            text: 'Alrighty',
            onPress: () => console.warn( "hello!" ),
          },
        ]
      );
    },

    render () {
      return (
        <View style={styles.container}>
          <Button label='Info' primary={true} onPress={e => this._info() } />
        </View>
      );
    },
  });
};

const styles = stylesheet({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
});

