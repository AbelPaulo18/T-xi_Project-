import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import {Color} from '../../Assets/Colors';

import RegularClassCar from '../../Assets/Logos/Veiculo.jpg';
import PlusIcon from '../../Assets/Icons/plus.png';

const TripInfoCard = ({toggler}) => {
  const [visibility, setVisibility] = useState(true);

  const toggle = () => {
    setVisibility(!visibility);
  };

  //Setting alternation booleans for each button
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  //Alternation for trip class
  const [tripClass1, setTripClass1] = useState(false);
  const [tripClass2, setTripClass2] = useState(false);

  const [seats, setSeats] = useState(0);

  const addSeat = () => {
    if (seats <= 4) {
      setSeats(seats + 1);
    }
  };
  const removeSeat = () => {
    if (seats <= 0) {
      setSeats(0);
    } else {
      setSeats(seats - 1);
    }
  };

  const piking1 = () => {
    setClicked1(!clicked1);
    setClicked2(false);
    setClicked3(false);
  };

  const piking2 = () => {
    setClicked2(!clicked2);
    setClicked1(false);
    setClicked3(false);
  };

  const piking3 = () => {
    setClicked3(!clicked3);
    setClicked1(false);
    setClicked2(false);
  };

  const economicTrip = () => {
    setTripClass1(!tripClass1);
    setTripClass2(false);
  };

  const plusTrip = () => {
    setTripClass2(!tripClass2);
    setTripClass1(false);
  };

  const focusedBtn = {
    backgroundColor: Color.primary,
    borderWidth: 1,
    borderColor: Color.primary,
  };

  const payments = [
    {
      method: 'Multicaixa',
      key: 1,
      cliking: piking1,
      cliked: clicked1,
    },
    {
      method: 'Cash',
      key: 2,
      cliking: piking2,
      cliked: clicked2,
    },
    {
      method: 'Transferência',
      key: 3,
      cliking: piking3,
      cliked: clicked3,
    },
  ];

  return (
    <Modal transparent visible={visibility}>
      <Animatable.View
        animation="slideInDown"
        duraton="2000"
        style={styles.body}>
        <View style={styles.cont}>
          <View style={styles.rowContainer}>
            <Text style={styles.txt1}>Formas de pagamento</Text>
            <View style={styles.row}>
              {payments.map(item => {
                return (
                  <TouchableOpacity
                    onPress={item.cliking}
                    key={item.key}
                    style={[
                      styles.payMethodBtn,
                      item.cliked ? focusedBtn : null,
                    ]}>
                    <Text
                      style={[
                        styles.txt2,
                        {color: Color.primary, fontWeight: 'bold'},
                        item.cliked ? {color: Color.White} : null,
                      ]}>
                      {item.method}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.hr}>
            <View
              style={[
                styles.Btnborder,
                tripClass1 ? {backgroundColor: Color.primary} : null,
              ]}>
              <TouchableOpacity
                onPress={economicTrip}
                style={styles.Tripclass1}>
                <Image style={styles.Cars} source={RegularClassCar} />
                <Text style={(styles.txt2, {color: Color.primary})}>
                  Económico
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.Btnborder,
                tripClass2 ? {backgroundColor: Color.primary} : null,
              ]}>
              <TouchableOpacity onPress={plusTrip} style={styles.Tripclass1}>
                <Image
                  resizeMode="cover"
                  style={styles.Cars}
                  source={RegularClassCar}
                />
                <Text style={(styles.txt2, {color: Color.primary})}>Plus</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.hr, {justifyContent: 'center'}]}>
            <View
              style={[
                styles.info,
                {
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                  paddingHorizontal: 6,
                },
              ]}>
              <Text style={[styles.txt2, {color: Color.primary}]}>Lugares</Text>
              <View
                style={{
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity onPress={removeSeat}>
                  <Image style={styles.icons} source={PlusIcon} />
                </TouchableOpacity>
                <Text> {seats} </Text>
                <TouchableOpacity onPress={addSeat}>
                  <Image style={styles.icons} source={PlusIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                styles.info,
                {
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  flexDirection: 'column',
                },
              ]}>
              <Text style={[styles.txt2, {color: Color.primary}]}>
                Estimativa a Pagar
              </Text>
              {<Text>XXXXXXX AO</Text>}
            </View>
          </View>

          <View style={styles.lastRow}>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor: Color.White,
                  borderWidth: 1,
                  borderColor: Color.primary,
                },
              ]}>
              <Text
                onPress={toggle}
                style={[
                  styles.txt2,
                  {color: Color.primary, fontWeight: 'bold'},
                ]}>
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <Text
                style={[styles.txt2, {color: Color.White, fontWeight: 'bold'}]}>
                Aceitar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </Modal>
  );
};

export default TripInfoCard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#00000099',
  },
  cont: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '90%',
    backgroundColor: Color.White,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  row: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Color.primary,
    borderRadius: 4,
    marginBottom: 8,
  },
  rowContainer: {
    height: '14%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
    paddingTop: 2,
    marginTop: 12,
  },
  payMethodBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    width: '29%',
    height: '70%',
    margin: 8,
    borderRadius: 6,
    backgroundColor: Color.White,
    borderWidth: 1,
    borderColor: Color.primary,
  },
  hr: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    paddingTop: 8,
    paddingHorizontal: 6,
    marginTop: 8,
  },
  Btnborder: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '75%',
    margin: 4,
    padding: 3,
    borderRadius: 6,
    backgroundColor: Color.InputBackColor,
    elevation: 0.5,
  },
  Tripclass1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '97%',
    height: '97%',
    borderRadius: 2,
    backgroundColor: 'white',
    elevation: 1,
    paddingBottom: 4,
    paddingTop: 2,
  },
  Cars: {
    height: '80%',
    width: '100%',
  },
  icons: {
    width: 25,
    height: 25,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '45%',
    height: '80%',
    backgroundColor: Color.White,
    borderWidth: 1,
    borderColor: Color.primary,
  },
  txt1: {
    color: Color.primary,
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    marginTop: 4,
  },
  txt2: {
    color: Color.White,
    fontStyle: 'italic',
  },
  lastRow: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: 30,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: '40%',
    height: '95%',
    backgroundColor: Color.primary,
  },
});
