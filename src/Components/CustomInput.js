import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

import {Color} from '../Assets/Colors';

const CustomInput = props => {
  return (
    <View style={styles.Row}>
      <View style={styles.Icons}>
        <Image style={styles.IconStyle} source={props.InputIcon} />
      </View>

      <TextInput
        style={styles.Inputs}
        secureTextEntry={props.secureText}
        placeholder={props.holder}
        keyboardType={props.keyboardTypes}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
  },
  Icons: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 40,
    borderRightWidth: 0,
    borderColor: '#fff',
    backgroundColor: Color.InputBackColor,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  IconStyle: {
    height: 30,
    width: 30,
    tintColor: Color.darkerPrimary,
  },
  Inputs: {
    borderLeftWidth: 0,
    borderColor: '#fff',
    width: '70%',
    height: 50,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: Color.InputBackColor,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});
