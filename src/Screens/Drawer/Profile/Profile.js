import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import HeadComponent from '../../../Components/TopHeaders/DrawerScreensHeader';

import styles from './Style';

import UserPhoto from '../../../Assets/Images/Us.jpg';

export default function Profile({navigation}) {
  const openD = () => navigation.openDrawer();

  return (
    <View style={styles.body}>
      <HeadComponent drawerOption={openD} />

      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={styles.scrollBody}>
          <TouchableOpacity style={styles.photoContainer}>
            <Image style={styles.userPhoto} source={UserPhoto} />
          </TouchableOpacity>

          <Text style={styles.txt}> UserName </Text>

          <TextInput style={styles.input} placeholder="Atualizar E-mail" />

          <TextInput
            style={styles.input}
            placeholder="Atualizar Nº de telefone"
          />

          <TextInput
            style={styles.input}
            placeholder="Password Atual"
            secureTextEntry
          />

          <Text style={styles.txt}> Mudar Senha (Optional) </Text>

          <TextInput style={styles.input} placeholder="Palavra Passe Atual" />

          <TextInput style={styles.input} placeholder="Password nova" />

          <TextInput style={styles.input} placeholder="Confirm new Password" />

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={{fontSize: 16, color: '#fff'}}> Save Changes </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
