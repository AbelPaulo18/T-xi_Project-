import React from 'react';

import { 
  StyleSheet, 
  View
} from 'react-native';

import { Color } from '../../Assets/Colors';

import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

import Lion from '../../Assets/Animations/lion.json'

function Update({navigation}) {
    setTimeout(() => {
        navigation.replace('Login')
    }, 5000);
        return (
            <View style={styles.container}>
               <LottieView source={Lion}    
               autoPlay loop />
              <View style={styles.separator}></View>
               
              <Animatable.Text 
                  animation="slideInDown" 
                  iterationCount={2} 
                  direction="normal"
                  style={styles.txt}
              > Verificando Atualizações </Animatable.Text>
            </View>
        )
}

export default Update;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor: Color.darkerPrimary
    },
    txt:{
        fontSize: 22,
        fontStyle: 'italic', 
        color: 'white',
        fontWeight: 'bold'
    },
    separator:{
        height: 20,
        width: '100%',
        marginTop: 16
    }
})
