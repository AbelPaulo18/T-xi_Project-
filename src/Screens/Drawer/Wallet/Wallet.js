import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';

import styles from './Style';

import HeadComponent from '../../../Components/TopHeaders/DrawerScreensHeader';

//import CreditComp from '../../Components/CreditInfoCard';

import LottieView from 'lottie-react-native';

import DepositLottie from '../../../Assets/Animations/lottieflow-ecommerce-14-17-976e3b-easey.json';

import HorizontalLottie from '../../../Assets/Animations/wave.json';

import WithDrawLottie from '../../../Assets/Animations/lottieflow-ecommerce-14-20-976e3b-easey.json';

import BackgroundBrown from '../../../Assets/Images/sunset-tree-gimped.jpg';

function DatePicker(props) {
  return (
    <TouchableOpacity style={styles.dateBtn}>
      <Text style={{color: '#fff'}}>
        {props.start} - {props.end}
      </Text>
    </TouchableOpacity>
  );
}

function WithDraws(props) {
  return (
    <TouchableOpacity style={styles.movementsBtn}>
      <Text> AO {props.withDrawAmmount} </Text>
      <View style={{alignItems: 'center'}}>
        <Text> Você retirou </Text>
        <Text>
          {' '}
          {props.date} ás {props.hour}h{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
function MoneyOption(props) {
  return (
    <TouchableOpacity style={styles.movementsBtn}>
      <View style={styles.walletHist}>
        <View style={styles.infoHist}>
          <Text style={styles.cc}>{props.moneyOption}</Text>
        </View>

        <View style={styles.line}>
          <View style={styles.method}>
            <Text style={styles.cc}>AO {props.ammount}</Text>
          </View>
        </View>

        <View style={styles.dateHist}>
          <Text style={styles.cc}>{props.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Wallet({navigation}) {
  const openD = () => navigation.openDrawer();

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="cover"
      source={BackgroundBrown}>
      <View style={styles.body}>
        <HeadComponent drawerOption={openD} />

        <View style={styles.horizontalScroll}>
          <ScrollView horizontal style={{height: '100%', width: '100%'}}>
            <View style={styles.dateShow}>
              <DatePicker start="22.04" end="30.04" />

              <DatePicker start="22.04" end="30.04" />

              <DatePicker start="22.04" end="30.04" />

              <DatePicker start="22.04" end="30.04" />
            </View>
          </ScrollView>
        </View>

        <View style={styles.moneyMovmentCard}>
          <View style={styles.depoAndWith}>
            <View style={styles.deposit}>
              <Text style={styles.primaryTxt}> Deposit </Text>

              <TouchableOpacity style={styles.actionBtn}>
                <LottieView source={DepositLottie} autoPlay loop />
              </TouchableOpacity>
            </View>

            <View style={styles.withDraw}>
              <Text style={styles.primaryTxt}> WithDraw </Text>

              <TouchableOpacity style={styles.actionBtn}>
                <LottieView source={WithDrawLottie} autoPlay loop />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.totalAmmount}>
          <Text style={styles.TotalCredittxt}>AO 6 000 </Text>

          <LottieView
            style={{width: '100%'}}
            source={HorizontalLottie}
            autoPlay
            loop
          />
        </View>

        <View style={{flex: 0.7, paddingHorizontal: 8}}>
          <ScrollView
            style={{
              height: '100%',
              width: '100%',
            }}>
            <View style={styles.scrollBody}>
              <MoneyOption
                hour={11}
                ammount={5790}
                date="03-03-2021"
                moneyOption="Deposit"
              />
              <MoneyOption
                hour={11}
                ammount={1000}
                date="03-03-2021"
                moneyOption="WithDraw"
              />
              <MoneyOption
                hour={11}
                ammount={7000}
                date="03-03-2021"
                moneyOption="WithDraw"
              />
              <MoneyOption
                hour={11}
                ammount={20000}
                date="03-03-2021"
                moneyOption="Payment"
              />
              <MoneyOption
                hour={11}
                ammount={5790}
                date="03-03-2021"
                moneyOption="Payment"
              />
              <MoneyOption
                hour={11}
                ammount={5790}
                date="03-03-2021"
                moneyOption="Deposit"
              />
              <MoneyOption
                hour={11}
                ammount={5790}
                date="03-03-2021"
                moneyOption="Payment"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Wallet;
