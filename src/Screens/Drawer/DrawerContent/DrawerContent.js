/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import styles from './Style';

/**
 * ()=>{props.navigation.navigate('Profile')}
 * ()=>{props.navigation.navigate('Home')}
 * ()=>{props.navigation.navigate('Profile')}
 * ()=>{props.navigation.navigate('Wallet')}
 * ()=>{props.navigation.navigate('Historic')}
 * ()=>{props.navigation.navigate('Terms')}
 * ()=>{props.navigation.navigate('Help')}
 */
//Images
import UserImage from '../../../Assets/Images/Us.jpg';

//Icons
import HomeIcon from '../../../Assets/Icons/icons8-home-50.png';
import ProfileIcon from '../../../Assets/Icons/User.png';
import WalletIcon from '../../../Assets/Icons/Wallet.png';
import HistoryIcon from '../../../Assets/Icons/icons8-time-machine-50.png';
import HelpIcon from '../../../Assets/Icons/icons8-call-center-agent-60.png';
import TermsIcon from '../../../Assets/Icons/icons8-terms-and-conditions-50.png';

const DrawerContainer = props => {
  const HomeNav = () => {
    props.navigation.navigate('Home');
  };

  const ProfileNav = () => {
    props.navigation.navigate('Profile');
  };

  const WalletNav = () => {
    props.navigation.navigate('Wallet');
  };

  const HistoricNav = () => {
    props.navigation.navigate('Historic');
  };

  const TermsNav = () => {
    props.navigation.navigate('Terms');
  };

  return (
    <ImageBackground style={{flex: 1}}>
      <DrawerContentScrollView {...props} style={{width: '100%'}}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.userInfoContainer}>
            <TouchableOpacity
              onPress={ProfileNav}
              activeOpacity={0.7}
              style={styles.userContent}>
              <Image source={UserImage} style={styles.profilePhoto} />
            </TouchableOpacity>

            <View style={{width: '100%', marginTop: 4}}>
              <Text style={styles.nameTxt}>UserName</Text>
              <Text style={styles.emailTxt}>useremail@gmail.com</Text>
            </View>
          </View>

          <View
            style={{
              width: '90%',
              padding: 8,
              alignContent: 'center',
            }}>
            <TouchableOpacity style={styles.screens} onPress={HomeNav}>
              <Image source={HomeIcon} style={styles.IconStyle} />

              <Text style={styles.btnText}> Home </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.screens} onPress={ProfileNav}>
              <Image source={ProfileIcon} style={styles.IconStyle} />

              <Text style={styles.btnText}> Perfil </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.screens} onPress={WalletNav}>
              <Image source={WalletIcon} style={{width: 30, height: 30}} />

              <Text style={styles.btnText}> Wallet </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.screens} onPress={HistoricNav}>
              <Image source={HistoryIcon} style={styles.IconStyle} />

              <Text style={styles.btnText}> Histórico </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.screens} onPress={TermsNav}>
              <Image source={TermsIcon} style={styles.IconStyle} />

              <Text style={styles.btnText}> Termos De Privacidade </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.screens}
              //  onPress={}
            >
              <Image source={HelpIcon} style={styles.IconStyle} />

              <Text style={styles.btnText}> Call Center </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>

      <DrawerItem label="Sign Out" style={{marginBottom: 8}} />
    </ImageBackground>
  );
};

export default DrawerContainer;
