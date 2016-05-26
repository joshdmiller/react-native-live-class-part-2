 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const FlexDemoFactory = ( React : Object ) => () => (
  <View style={styles.main}>
    <View style={styles.unit}>
      <Text style={styles.label}>1</Text>
    </View>

    <View style={styles.row}>
      <View style={styles.unit}>
        <Text style={styles.label}>2</Text>
      </View>

      <View style={styles.unit}>
        <Text style={styles.label}>3</Text>
      </View>

      <View style={[styles.unit, styles.flex]}>
        <Text style={styles.label}>4</Text>
      </View>
    </View>

    <View style={[ styles.unit, styles.column, styles.flex ]}>
      <View style={styles.unit}>
        <Text style={styles.label}>5</Text>
      </View>

      <View style={styles.unit}>
        <Text style={styles.label}>6</Text>
      </View>

      <View style={[styles.unit, styles.flex, styles.centerV]}>
        <Text style={styles.label}>7</Text>
      </View>
    </View>

    <View style={styles.row}>
      <View style={styles.unit}>
        <Text style={styles.label}>8</Text>
      </View>

      <View style={[styles.unit, styles.flex]}>
        <View style={[ styles.column, styles.flex ]}>
          <View style={styles.unit}>
            <Text style={styles.label}>9</Text>
          </View>

          <View style={styles.unit}>
            <Text style={styles.label}>10</Text>
          </View>

          <View style={[styles.unit, styles.row, styles.flex]}>
            <View style={styles.unit}>
              <Text style={styles.label}>11</Text>
            </View>

            <View style={[styles.unit, styles.flex]}>
              <Text style={styles.label}>12</Text>
            </View>

            <View style={styles.unit}>
              <Text style={styles.label}>13</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

FlexDemoFactory.__tests__ = ( addTest: Function, React: Object ) => {
  const FlexDemo = FlexDemoFactory( React );

  addTest( 'ComplexLayout', () => <FlexDemo /> );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
  },

  unit: {
    borderWidth: 1,
    borderColor: '#666666',
    backgroundColor: 'rgba( 51, 102, 153, 0.2 )',
    padding: 3,
    margin: 3,
  },

  flex: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
  },

  column: {
    flexDirection: 'column',
  },

  centerV: {
    justifyContent: 'center',
  },

  label: {
    color: '#666666',
    fontSize: 14,
    textAlign: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#666666',
  },
});

export default FlexDemoFactory;

