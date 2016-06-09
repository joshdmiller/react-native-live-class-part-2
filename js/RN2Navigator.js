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
import WSTodosFactory from './routes/WSTodos';
import GeolocationFactory from './routes/Geolocation';
import ImagePickFactory from './routes/ImagePick';
import AlertsFactory from './routes/Alerts';
import AnimationFactory from './routes/Animation';

export default ( React : Object, ...behaviours : Array<Object> )  => {
  const Todos = TodosFactory( React );
  const WSTodos = WSTodosFactory( React );
  const Geolocation = GeolocationFactory( React );
  const ImagePick = ImagePickFactory( React );
  const Alerts = AlertsFactory( React );
  const Animation = AnimationFactory( React );

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
          initialRoute={{ id: 'alerts' }}
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
        case 'wstodos':
          return <WSTodos />;
          break;
        case 'todos':
          return <Todos />;
          break;
        case 'geolocation':
          return <Geolocation />;
          break;
        case 'imagepick':
          return <ImagePick />;
          break;
        case 'alerts':
          return <Alerts />;
          break;
        case 'animation':
          return <Animation />;
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

