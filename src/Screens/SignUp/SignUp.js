import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

//Components
import styles from './Style';
import ImageComp from '../../Components/WhiteLogoComponent';
import CustomInput from '../../Components/CustomInput';

//BackgroundImage
import BackgroundImage from '../../Assets/Images/SignUpBackground.jpg';

//Icons
import UserIcon from '../../Assets/Icons/User.png';
import PhoneIcon from '../../Assets/Icons/Phone.png';
import EmailIcon from '../../Assets/Icons/icons8-email-64.png';
import PasswordIcon from '../../Assets/Icons/OutlineLock.png';

//Logo
import Logo from '../../Assets/Logos/Logo_Official.png';

function SignUp({navigation}) {
  const mainScreen = () => {
    navigation.replace('Main');
  };

  const loginScreen = () => {
    navigation.replace('Login');
  };

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}>
      <View style={styles.Incontainer}>
        <View style={{flex: 0.355}}>
          <ImageComp image={Logo} />
        </View>

        <ScrollView style={{flex: 2, width: '100%'}}>
          <View style={styles.accountDetails}>
            <Text style={{color: '#ffffff', marginBottom: 4, fontSize: 18}}>
              {' '}
              Criar Conta{' '}
            </Text>

            <CustomInput InputIcon={UserIcon} holder="Nome completo" />

            <CustomInput
              InputIcon={PhoneIcon}
              holder="Telefone"
              keyboardTypes="numeric"
            />

            <CustomInput InputIcon={EmailIcon} holder="E-mail" />

            <CustomInput
              InputIcon={PasswordIcon}
              holder="Senha"
              secureText={true}
            />

            <CustomInput
              InputIcon={PasswordIcon}
              holder="Confirmar senha"
              secureText={true}
            />

            <TouchableOpacity style={styles.NextBtn} onPress={mainScreen}>
              <Text style={{color: '#ffffff'}}> Próximo </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={loginScreen}>
              <Text style={{color: '#ffffff', marginTop: 8}}>
                Já tenho conta
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
export default SignUp;
