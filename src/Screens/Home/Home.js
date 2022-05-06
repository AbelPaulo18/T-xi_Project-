import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import TimedSlideshow from 'react-native-timed-slideshow';

import HeaderBar from '../../Components/TopHeaders/HeaderBar';
import styles from './Style';

//Slide Show Images
import Dahora1 from '../../Assets/Logos/Dahora_Logo.jpg';
import Dahora2 from '../../Assets/Logos/Veiculo.jpg';
import Dahora3 from '../../Assets/Logos/Sign.jpg';

//Images
import Savana from '../../Assets/Images/Savana.jpg';

//Icons
import CarrIcon from '../../Assets/Icons/App_Taxi3.png';
import MotoIcon from '../../Assets/Icons/icons8-motorcycle-52.png';
import FreteIcon from '../../Assets/Icons/Taxi_Car.png';
import MapIcon from '../../Assets/Icons/map.png';

const Home = ({navigation}) => {
  const [slide, setslide] = useState([
    {
      title: 'Dahora 1',
      text: 'Text 1',
      uri: Dahora1,
    },
    {
      title: 'Dahora 2',
      text: 'Text 2',
      uri: Dahora2,
    },
    {
      title: 'Dahora 3',
      text: 'Text 3',
      uri: Dahora3,
    },
  ]);
  /**
    

    const Taxi =()=>{
        navigation.navigate('CarMapInfo')
    }
    const Frete =()=>{
        navigation.navigate('FreteInfo')
    }
    const Moto =()=>{
        navigation.navigate('MotoMapInfo')
    }
    const Other =()=>{
        navigation.navigate('OtherMapInfo')
    }

     * <HeadComponent
           drawerOption={openD}
       />

  */

  const Taxi = () => {
    navigation.navigate('CarMap');
  };

  const openD = () => navigation.openDrawer();

  return (
    <View style={styles.Container}>
      <HeaderBar ToggleDrawer={openD} />

      <View style={styles.slideCont}>
        <TimedSlideshow
          items={slide}
          extraSpacing={50}
          duration={3000}
          footerStyle={{
            height: 140,
          }}
          progressBarColor="#976e3bd7"
          titleStyle={{
            fontSize: 24,
          }}
          textStyle={{
            fontSize: 18,
          }}
        />
      </View>

      <View style={styles.optionsCont}>
        <ImageBackground
          style={{flex: 1, width: '100%', alignItems: 'center'}}
          source={Savana}>
          <View style={styles.row}>
            <TouchableOpacity onPress={Taxi} style={styles.infoBox}>
              <Text style={styles.txt}> Carros </Text>

              <Image style={styles.Icon} source={CarrIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoBox}>
              <Text style={styles.txt}> MotoTaxi </Text>
              <Image style={styles.Icon} source={MotoIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.infoBox}>
              <Text style={styles.txt}> Frete </Text>

              <Image style={styles.Icon} source={FreteIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoBox}>
              <Text style={styles.txt}> Outra </Text>

              <Image style={styles.Icon} source={MapIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;
