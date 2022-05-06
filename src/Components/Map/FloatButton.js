import React from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {Color} from '../../Assets/Colors';

import locationIcon from '../../Assets/Icons/compass.png';

const FloatButton = () => {
  return (
    <View style={styles.btnBody}>
      <TouchableWithoutFeedback style={styles.btn}>
        <Image style={styles.Icon} source={locationIcon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatButton;
const styles = StyleSheet.create({
  btnBody: {
    position: 'absolute',
    bottom: '20%',
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 100,
    padding: 4,
    backgroundColor: Color.primary,
  },
  btn: {
    elevation: 4,
    width: '100%',
    height: '100%',
    backgroundColor: Color.White,
  },
  Icon: {
    width: '100%',
    height: '100%',
    tintColor: Color.White,
  },
});
