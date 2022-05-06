import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Style';

import DrawerScreensHeader from '../../Components/TopHeaders/DrawerScreensHeader';
import MapSearch from '../../Components/Map/MapSearchLocation';
import FloatButton from '../../Components/Map/FloatButton';
import TripInfoCard from '../../Components/Map/TripInfoCard';
//1060

export default function Taxi_Map({navigation}) {
  const back = () => navigation.goBack();

  const [visibility, setVisibility] = useState(true);

  const toggle = () => {
    setVisibility(!visibility);
  };

  return (
    <View style={styles.body}>
      <DrawerScreensHeader drawerOption={back} />

      <MapSearch />

      <FloatButton />

      <TouchableOpacity onPress={toggle}>
        <Text>Click me </Text>
      </TouchableOpacity>

      {visibility ? <TripInfoCard /> : null}
    </View>
  );
}
