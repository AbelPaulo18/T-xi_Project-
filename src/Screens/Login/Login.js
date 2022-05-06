import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';

//Components
import ImageComp from '../../Components/WhiteLogoComponent';
import CustomInput from '../../Components/CustomInput';
import styles from './Style';

//
import BackgroundImage from '../../Assets/Images/LoginBackground.jpg';

//Icons
import PhoneIcon from '../../Assets/Icons/Phone.png';
import LockIcon from '../../Assets/Icons/OutlineLock.png';

function Login({navigation}) {
  const NextScreen = () => {
    navigation.replace('Main');
  };

  const CreateAccount = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <ImageComp />

      <View style={styles.InpContainer}>
        <CustomInput InputIcon={PhoneIcon} holder="Telefone ou E-mail" />

        <CustomInput InputIcon={LockIcon} holder="Senha" secureText={true} />

        <TouchableOpacity style={styles.logBtn} onPress={NextScreen}>
          <Text style={{color: '#fff'}}> Entrar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SigBtn} onPress={CreateAccount}>
          <Text style={{color: '#fff'}}> Criar conta </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
export default Login;
