 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Platform from 'Platform';
import BackAndroid from 'BackAndroid';
import TodosFactory from './routes/Todos';
import GeolocationFactory from './routes/Geolocation';

export default ( React : Object, ...behaviours : Array<Object> )  => {
  const Todos = TodosFactory( React );
  const Geolocation = GeolocationFactory( React );

  return rs( React ).compose({
    init () {
      this._handleBack = this._handleBack.bind( this );
    },

    componentWillMount () {
      if ( Platform.OS === 'android' ) {
        BackAndroid.addEventListener( 'hardwareBackPress', this._handleBack );
      }
    },

    componentWillUnmount () {
      if ( Platform.OS === 'android' ) {
        BackAndroid.removeEventListener( 'hardwareBackPress', this._handleBack );
      }
    },

    render () {
      return (
        <Navigator
          ref="navigator"
          style={styles.container}
          initialRoute={{ id: 'geolocation' }}
          renderScene={( ...a ) => this.renderScene( ...a )}
          configureScene={route => {
            if ( Platform.OS === 'android' ) {
              return Navigator.SceneConfigs.FloatFromBottomAndroid;
            } else {
              return Navigator.SceneConfigs.FloatFromBottom;
            }
          }}
        />
      );
    },

    _goto ( navigator, id ) {
      navigator.push({ id });
    },

    _handleBack () {
      const { navigator } = this.refs;

      if ( navigator && navigator.getCurrentRoutes().length > 1 ) {
        navigator.pop();
        return true;
      }

      return false;
    },

    renderScene ( { id }, navigator ) {
      switch ( id ) {
        case 'todos':
          return <Todos />;
          break;
        case 'geolocation':
          return <Geolocation />;
          break;
        default:
          return null;
      }
    },
  }, ...behaviours );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  route: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#aaaaaa',
    marginBottom: 5,
  },
});

