 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  LayoutAnimation,
  TouchableWithoutFeedback,
  UIManager,
} from 'react-native';
import stylesheet from '../stylesheet';

export default ( React : Object ) => rs( React ).compose({
  init () {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    this.state = {
      big: false,
    };
  },

  _onPress () {
    LayoutAnimation.spring();
    this.setState({ big: ! this.state.big });
  },

  render () {
    const { big } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.filler} />

        <TouchableWithoutFeedback onPress={e => this._onPress()}>
          <View style={[ big && styles.flex ]}>
            <Text style={styles.text}>Click Me</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.filler} />
      </View>
    );
  },
});

const styles = stylesheet({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  filler: {
    backgroundColor: '#ddd',
    flex: 1,
  },

  flex: {
    flex: 1,
  },

  text: {
    fontWeight: 'bold',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000'
  },
});

