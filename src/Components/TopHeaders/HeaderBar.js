import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from 'react-native';

import LottieView from 'lottie-react-native';

//Animation
import MenuIcon from '../../Assets/Animations/hamburgerBrown.json';

export default function HeaderBar(props) {
  return (
    <View style={styles.cont}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <TouchableOpacity onPress={props.ToggleDrawer} style={styles.opacy}>
        <LottieView style={styles.menu} source={MenuIcon} autoPlay loop />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
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
