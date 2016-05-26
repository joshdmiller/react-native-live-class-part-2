 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
} from 'react-native';
import stylesheet from '../stylesheet';
import ButtonFactory from '../demos/Button';

export default ( React : Object )  => {
  const Button = ButtonFactory( React );

  return ({
    id,
    title,
    onDelete,
  }) => (
    <View style={styles.container}>
      <Text style={styles.label}>{ title }</Text>
      <Button label='Delete' onPress={e => onDelete( id )} />
    </View>
  );
};

const styles = stylesheet({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  label: {
    flex: 1,
  },
});

