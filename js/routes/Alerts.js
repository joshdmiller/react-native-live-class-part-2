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

    _prompt () {
      Alert.alert(
        'Pick One',
        'Choose your own adventure...',
        [
          {
            text: 'Go back!',
            onPress: () => console.warn( 'go back' ),
          },
          {
            text: 'Enter the dungeon',
            onPress: () => console.warn( 'enter the dungeon' ),
          },
        ]
      );
    },

    render () {
      return (
        <View style={styles.container}>
          <Button label='Info' primary={true} onPress={e => this._info() } />
          <Button label='Prompt' onPress={e => this._prompt() } />
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

