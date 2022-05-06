import React from 'react';
import {StyleSheet, View, TouchableOpacity, StatusBar} from 'react-native';

import LottieView from 'lottie-react-native';
import ArrowLeft from '../../Assets/Animations/ArrowLeftBrown.json';
import {Color} from '../../Assets/Colors';

const DrawerScreensHeader = props => {
  return (
    <View style={{...styles.cont, ...props.styles}}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity onPress={props.drawerOption} style={styles.opacy}>
        <LottieView style={styles.menu} source={ArrowLeft} autoPlay loop />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    paddingLeft: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderColor: Color.primary,
    marginTop: Platform.OS === 'ios' ? 40 : 16,
  },
  opacy: {
    height: 40,
    width: 40,
    alignItems: 'center',
  },
  menu: {
    height: 40,
    width: 30,
  },
});

export default DrawerScreensHeader;
