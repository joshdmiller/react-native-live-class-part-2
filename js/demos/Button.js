 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import stylesheet from '../stylesheet';

const ButtonFactory = ( React : Object ) => ({
  disabled = false,
  label,
  primary = false,

  onPress = f => f,

  ...props
}) => (
  <TouchableHighlight
    style={[ styles.container, primary && styles.primary ]}
    onPress={onPress}
    activeOpacity={0.6}
    underlayColor='#ffffff'
  >
    <Text style={[ styles.text, primary && styles.primaryText ]}>{ label }</Text>
  </TouchableHighlight>
);

ButtonFactory.__tests__ = ( addTest: Function, React: Object ) => {
  const Button = ButtonFactory( React );
  const log = () => console.log( "Button Pressed" );
  const demoStyle = {
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  };
  const Container = ({ children }) => <View style={demoStyle}>{ children }</View>;

  addTest( 'Basic Button', () => (
    <Container>
      <Button label='BASIC' onPress={log} />
    </Container>
  ));

  addTest( 'Primary Button', () => (
    <Container>
      <Button label='PRIMARY' primary={true} onPress={log} />
    </Container>
  ));

  addTest( 'Disabled Button', () => (
    <Container>
      <Button label='DISABLED' onPress={log} disabled={true} />
    </Container>
  ));
};

const styles = stylesheet({
  container: {
    android: {
      elevation: 1,
      borderRadius: 2,
      height: 36,
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },

    ios: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#bcbcbc',
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 8,
      paddingBottom: 8,
    },
  },

  primary: {
    android: {
      backgroundColor: '#00bcd4',
    },
  },

  primaryText: {
    android: {
      color: '#ffffff',
    },
  },

  text: {
    android: {
      color: '#333333',
      fontSize: 14,
    },

    ios: {
      color: '#888888',
      fontWeight: 'bold',
      textShadowColor: 'rgba( 255, 255, 255, 0.8 )',
      textShadowOffset: { width: 0, height: 1 },
      // textShadow: '0 1px 0 rgba(255,255,255, 0.8)',
    },
  },
});

export default ButtonFactory;

