import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { appGeoSelector, setGeo } from '../store/app/appGeoReducer';

import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';


const MainScreen = () => {
  const navigation = useNavigation();

  const {geo} = useSelector(appGeoSelector);
  const dispatch = useDispatch();

  navigation.setOptions({
    title: `${geo?.accuracy} ${geo?.altitude} ${geo?.altitudeAccuracy} ${geo?.heading} ${geo?.latitude} ${geo?.longitude}`,
  });

  useEffect( () => {
    const getCurrentGeo = () => {
      try {
        Geolocation.getCurrentPosition(info => dispatch(setGeo(info.coords)));
      } catch (e) {
        console.warn(e);
      }
    };

    getCurrentGeo();
  }, [dispatch]);

  useEffect(() => {
    console.log(geo);
  },[geo]);


  return (
    <View style={styles.container}>
      <Text>Все, хватит пока</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default MainScreen;
