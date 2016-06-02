 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  Image,
} from 'react-native';
import stylesheet from '../stylesheet';
import { ImagePickerManager } from 'NativeModules';
import ButtonFactory from '../demos/Button';

const imagePickerOptions = {
  title: 'Pick a Photo',
  takePhotoButtonTitle: 'Take a new Photo',
  chooseFromLibraryButtonTitle: 'Choose an Existing Photo',
  quality: 0.5,
};

export default ( React : Object ) => {
  const Button = ButtonFactory( React );

  return rs( React ).compose({
    init () {
      this.state = {};
    },

    _addImage () {
      ImagePickerManager.showImagePicker( imagePickerOptions, image => {
        if ( ! image.didCancel ) {
          this.setState({ image });
        }
      })
    },

    render () {
      const { image } = this.state;
      let source;

      if ( image ) {
        source = {
          uri: image.uri.replace( 'file://', '' ),
          isStatic: true
        };
      }

      return (
        <View style={styles.container}>
          <Button label='Set Image' primary={true} onPress={e => this._addImage() } />
          { this.state.image ? <View style={styles.imageContainer}>
            <Image
              source={source}
              style={styles.image}
            />
          </View> : null }
        </View>
      );
    },
  });
};

const styles = stylesheet({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

