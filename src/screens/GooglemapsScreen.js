import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MinusSvg from '../svgs/MinusSvg';
import PlusSvg from '../svgs/PlusSvg';

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);

  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      },
      error => {
        Alert.alert(
          'Error',
          `Failed to get your location: ${error.message}` +
            ' Make sure your location is enabled.',
        );
        setLocation(defaultLocation);
      },
    );
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            Alert.alert(
              'Permission Denied',
              'Location permission is required to show your current location on the map.',
            );
            setLocation(defaultLocation);
          }
        } catch (err) {
          console.warn(err);
          setLocation(defaultLocation);
        }
      } else {
        getCurrentLocation();
      }
    };

    requestLocationPermission();
  }, []);

  const handleMapPress = e => {
    const coordinate = e?.nativeEvent?.coordinate;
  };

  const handleZoomInMapPress = e => {
    mapRef?.current?.getCamera().then(cam => {
      cam.zoom += 1;
      mapRef?.current?.animateCamera(cam);
    });
  };
  const handleZoomOutMapPress = e => {
    mapRef?.current?.getCamera().then(cam => {
      cam.zoom -= 1;
      mapRef?.current?.animateCamera(cam);
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        region={location}
        onPress={handleMapPress}>
        {/* Render default markers */}
        <Marker coordinate={location} />

        <Marker
          coordinate={{
            latitude: 41.022297,
            longitude: 29.014352,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
        <Marker
          coordinate={{
            latitude: 36.844364,
            longitude: 35.337136,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />

        {/* Render main markers */}
      </MapView>
      <TouchableOpacity
        style={{position: 'absolute', top: 150, right: 30}}
        onPress={handleZoomOutMapPress}>
        <MinusSvg />
      </TouchableOpacity>
      <TouchableOpacity
        style={{position: 'absolute', top: 220, right: 30}}
        onPress={handleZoomInMapPress}>
        <PlusSvg />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',

    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
