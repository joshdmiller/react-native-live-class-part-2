/**
 * @flow
 */

import React, { Component } from 'react';
import rs from 'react-stamp';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import RN2NavigatorFactory from './RN2Navigator';

const RN2Navigator = RN2NavigatorFactory( React );

export default ( React : Object, ...behaviours : Array<Object> )  => rs( React ).compose({
  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor="rgba(0,0,0,0.3)"
          barStyle="default"
        />
        <RN2Navigator />
      </View>
    );
  },
}, ...behaviours );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

