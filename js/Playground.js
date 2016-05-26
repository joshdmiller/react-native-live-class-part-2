 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  StyleSheet,
} from 'react-native';

import Component from './demos/Button';

export default ( React : Object, ...behaviours : Array<Object> ) => rs( React ).compose({
  init () {
    const content = [];
    const Test = TestFactory( React );
    const addTest = ( name: String, render: Function ) => content.push(
      <Test key={name} render={render} />
    );

    Component.__tests__( addTest, React );

    this.state = { content };
  },

  render () {
    const { content } = this.state;

    return (
      <View style={styles.playground}>
        { content }
      </View>
    );
  },
}, ...behaviours );

export const TestFactory = ( React ) => ({ render }) => (
  <View style={{ flex: 1, justifyContent: 'space-around' }}>
    { render() }
  </View>
);

const styles = StyleSheet.create({
  playground: {
    flex: 1,
    // backgroundColor: '#336699',
  },
});

