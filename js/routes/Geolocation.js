 /**
  * @flow
  */

import rs from 'react-stamp';
import {
  View,
  Text,
  MapView,
} from 'react-native';
import stylesheet from '../stylesheet';

export default ( React : Object ) => rs( React ).compose({
  init () {
    this.state = {
      position: { coords: {} },
    };
  },

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ position }),
      err => console.warn( err.message ),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.geoWatchId = navigator.geolocation.watchPosition(
      position => this.setState({ position })
    );
  },

  componentWillUnmount () {
    navigator.geolocation.clearWatch( this.geoWatchId );
  },

  render () {
    const { position: { coords } } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
        />

        <View style={styles.coords}>
          <Text style={styles.label}>
            Lat, Long:
          </Text>
          <Text style={styles.value}>
            {`( ${coords.latitude}, ${coords.longitude} )`}
          </Text>
        </View>
      </View>
    );
  },
});

const styles = stylesheet({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  map: {
    flex: 1,
    margin: 10,
    borderColor: '#aaaaaa',
    borderWidth: 1,
  },


  coords: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,

    flexDirection: 'row',
  },

  label: {
    fontWeight: 'bold',
  },

  value: {
    fontStyle: 'italic',
  },
});

