/**
 * flow
 */

import Firebase from 'firebase';

function initializeDb () : Object {
  Firebase.initializeApp({
    apiKey: 'AIzaSyD1WkaU9fRm_PYc7pxtnNp_RtgUIVv50T0',
    authDomain: 'react-native-live-class-part-2.firebaseapp.com',
    databaseURL: 'https://react-native-live-class-part-2.firebaseio.com',
    storageBucket: 'react-native-live-class-part-2.appspot.com',
  });

  return Firebase.database();
};

export default new Firebase( 'https://react-native-live-class-part-2.firebaseio.com/demo' );

