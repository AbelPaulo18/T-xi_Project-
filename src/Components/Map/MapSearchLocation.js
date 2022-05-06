import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {Color} from '../../Assets/Colors';

const MapSearchLocation = () => {
  return (
    <KeyboardAvoidingView behavior="position" style={styles.boxBody}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="From "
          placeholderTextColor="white"
          //textAlign="center"
        />
      </View>

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="To "
          placeholderTextColor="white"
          //textAlign="center"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MapSearchLocation;

const styles = StyleSheet.create({
  boxBody: {
    justifyContent: 'center',
    height: '15%',
    width: '90%',
    paddingVertical: 10,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: Color.White,
    color: '#fff',
  },
  box: {
    padding: 6,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    borderRadius: 6,
    backgroundColor: Color.primary,
    elevation: 5,
  },
});
