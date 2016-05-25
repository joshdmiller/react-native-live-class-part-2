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

export default ( React : Object, ...behaviours : Array<Object> )  => rs( React ).compose({
  render () {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 0 }}
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

  renderScene ( { id }, navigator ) {
    return id === 0 ? (
      <View style={styles.route}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.text}>
          On iOS, press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu.{'\n'}
          On Android, press Cmd+M for dev menu.
        </Text>
        <TouchableHighlight onPress={e => this._goto( navigator, 2 )}>
          <Text style={styles.text}>Go to Route 2</Text>
        </TouchableHighlight>
      </View>
    ) : (
      <View style={styles.route}>
        <Text style={styles.welcome}>
          Route 2!
        </Text>

        <TouchableHighlight onPress={e => navigator.pop()}>
          <Text style={styles.text}>Back</Text>
        </TouchableHighlight>
      </View>
    );
  },
}, ...behaviours );

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

