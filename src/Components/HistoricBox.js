import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../Screens/Drawer/Historic/Style';

import DriverImg from '../Assets/Icons/icons8-call-center-agent-60.png';
import TrajectIcon from '../Assets/Icons/route.png';

export default function CardHistoryS(props) {
  return (
    <TouchableOpacity style={styles.infoCard}>
      <View style={styles.dd}>
        <View style={styles.dS}>
          <View style={styles.Img}>
            <Image style={styles.driverPic} source={DriverImg} />
          </View>

          <View style={styles.DriverNameContainer}>
            <Text style={styles.DriverName}>{props.DriverName}</Text>

            <Text></Text>
          </View>

          <View style={styles.TextsInfo}>
            <View style={styles.Bx}>
              <Text style={styles.Text1}>Pago</Text>
              <Text style={styles.Text2}>{props.Paid} AO</Text>
            </View>

            <View style={styles.Bx}>
              <Text style={styles.Text1}>Duração</Text>
              <Text style={styles.Text2}>{props.TripDuration} min</Text>
            </View>
          </View>
        </View>

        <View style={styles.TripHistorial}>
          <View style={styles.TrajectIcon}>
            <Image source={TrajectIcon} style={styles.icon} />
          </View>

          <View style={styles.TripDetails}>
            <View style={styles.InfoRow}>
              <Text style={styles.Text1}>{props.From}</Text>

              <Text style={styles.Text2}>{props.PickUpTime}</Text>
            </View>

            <View style={styles.InfoRow}>
              <Text style={styles.Text1}>{props.To}</Text>

              <Text style={styles.Text2}>{props.DropTime}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
