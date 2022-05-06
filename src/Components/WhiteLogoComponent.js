import React from 'react';
import {StyleSheet, Image, Dimensions, View} from 'react-native';

import * as Animatable from 'react-native-animatable';

//import * as Animatable from 'react-native-animatable';
// animation = 'bounceIn'
// duraton = '1500'

import WhiteLogo from '../Assets/Logos/WhiteLogo.png';

function WhiteLogoComp() {
  return (
    <Animatable.View
      style={styles.ImgContainer}
      animation="slideInDown"
      iterationCount={1}
      //direction="alternate"
    >
      <Image style={styles.Logo} source={WhiteLogo} />
    </Animatable.View>
  );
}
export default WhiteLogoComp;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  ImgContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 11,
    marginBottom: 18,
  },
  Logo: {
    height: 120,
    width: 120,
    borderRadius: 100,
    marginBottom: 64,
  },
});
