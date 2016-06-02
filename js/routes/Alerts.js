 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  Alert,
  ToastAndroid,
  Platform,
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

    _promptNeutral () {
      Alert.alert(
        'A Little More Complex',
        'Would you like to fight back?',
        [
          {
            text: 'Maybe Later...',
            onPress: () => console.warn( 'indecision will kill you' ),
          },
          {
            text: 'Nope',
            onPress: () => console.warn( 'weak or prudent?' ),
          },
          {
            text: 'Of course!',
            onPress: () => console.warn( 'make it so!' ),
          },
        ]
      );
    },

    _toast () {
      ToastAndroid.show( 'Snack, anyone?', ToastAndroid.SHORT );
    },

    render () {
      return (
        <View style={styles.container}>
          <Button label='Info' primary={true} onPress={e => this._info() } />
          <Button label='Prompt' onPress={e => this._prompt() } />
          <Button label='Prompt with Neutral' onPress={e => this._promptNeutral() } />

          { Platform.OS === 'android' ? 
            <Button label='Show a Toast' onPress={e => this._toast() } />
            : null }
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

