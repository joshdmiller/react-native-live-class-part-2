 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  Animated,
} from 'react-native';
import stylesheet from '../stylesheet';

const imageUrl = 'http://i.imgur.com/XMKOH81.jpg';

export default ( React : Object ) => rs( React ).compose({
  init () {
    this.state = {
      bounceValue: new Animated.Value( 0 ),
    };
  },

  componentDidMount () {
    const { bounceValue } = this.state;

    bounceValue.setValue( 1.5 );

    Animated.spring(
      bounceValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start();
  },

  render () {
    const { bounceValue } = this.state;

    return (
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: imageUrl }}
          style={[ styles.image, {
            transform: [
              { scale: bounceValue },
            ],
          }]}
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

  image: {
    flex: 1,
  },
});

