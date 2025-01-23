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
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isChoosingSource, setIsChoosingSource] = useState(false);
  const [isChoosingDestination, setIsChoosingDestination] = useState(false);
  const mapRef = useRef(null);
  const [zoom, setZoom] = useState(15);

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
        setLoading(false);
      },
      error => {
        Alert.alert(
          'Error',
          `Failed to get your location: ${error.message}` +
            ' Make sure your location is enabled.',
        );
        setLocation(defaultLocation);
        setLoading(false);
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
            setLoading(false);
          }
        } catch (err) {
          console.warn(err);
          setLocation(defaultLocation);
          setLoading(false);
        }
      } else {
        getCurrentLocation();
      }
    };

    requestLocationPermission();
  }, []);

  const handleMapPress = e => {
    const coordinate = e?.nativeEvent?.coordinate;
    if (isChoosingSource) {
      setSource(coordinate);
      setIsChoosingSource(false);
    } else if (isChoosingDestination) {
      setDestination(coordinate);
      setIsChoosingDestination(false);
    }
  };

  const [selectedRegion, setSelectedRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
        {/* Render main markers */}
        {source && (
          <Marker
            coordinate={source}
            title={'Source'}
            description={'Your source location'}
            pinColor={'green'}
            onPress={() => zoomToMarker(source)}
          />
        )}
        {destination && (
          <Marker
            coordinate={destination}
            title={'Destination'}
            description={'Your destination location'}
            pinColor={'blue'}
            onPress={() => zoomToMarker(destination)}
          />
        )}
        {source && destination && (
          <Polyline
            coordinates={[source, destination]}
            strokeColor="#000"
            strokeWidth={2}
          />
        )}
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
