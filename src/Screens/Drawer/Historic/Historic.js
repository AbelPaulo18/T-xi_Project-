import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

import styles from './Style';

//Background Img
import Imagem from '../../../Assets/Images/dark-desert.jpg';

import HeadComponent from '../../../Components/TopHeaders/DrawerScreensHeader';
import CardHistoryS from '../../../Components/HistoricBox';

function DatePicker(props) {
  return (
    <TouchableOpacity style={styles.dateBtn}>
      <Text style={{color: '#fff'}}>{props.end}</Text>
    </TouchableOpacity>
  );
}

export default function Historic({navigation}) {
  const openD = () => navigation.openDrawer();

  return (
    <ImageBackground source={Imagem} style={styles.body}>
      <HeadComponent drawerOption={openD} />

      <View style={styles.horizontalScroll}>
        <ScrollView horizontal style={{height: '100%', width: '100%'}}>
          <View style={styles.dateShow}>
            <DatePicker end="Janeiro" />

            <DatePicker end="Fevereiro" />

            <DatePicker end="Março" />

            <DatePicker end="Abril" />

            <DatePicker end="Junho" />
          </View>
        </ScrollView>
      </View>

      <ScrollView style={{width: '100%', flex: 1}}>
        <View style={styles.scrollBody}>
          <CardHistoryS
            DriverName="John Doe"
            Paid={42000}
            TripDuration={37}
            From="Clinica xxxxxxx"
            To="Centralidade-xxxxx "
            PickUpTime={`12:34`}
            DropTime="13:00"
          />
          <CardHistoryS
            DriverName="John Doe"
            Paid={42000}
            TripDuration={37}
            From="Clinica xxxxxxx"
            To="Centralidade-xxxxx "
            PickUpTime={`12:34`}
            DropTime="13:00"
          />
          <CardHistoryS
            DriverName="John Doe"
            Paid={42000}
            TripDuration={37}
            From="Clinica xxxxxxx"
            To="Centralidade-xxxxx "
            PickUpTime={`12:34`}
            DropTime="13:00"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
