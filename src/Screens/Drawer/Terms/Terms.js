import React from 'react';
import {View, Text} from 'react-native';

import styles from './Style';

import Header from '../../../Components/TopHeaders/DrawerScreensHeader';

export default function Terms({navigation}) {
  const openD = () => navigation.openDrawer();

  return (
    <View>
      <Header drawerOption={openD} />
      <Text>Terms</Text>
    </View>
  );
}
