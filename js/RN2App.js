/**
 * @flow
 */

import React, { Component } from 'react';
import rs from 'react-stamp';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default ( React : Object, ...behaviours : Array<Object> )  => rs( React ).compose({
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          On iOS, press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu.{'\n'}
          On Android, press Cmd+M for dev menu.
        </Text>
      </View>
    );
  },
}, ...behaviours );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

