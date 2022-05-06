import {StyleSheet} from 'react-native';
import {Color} from '../../../Assets/Colors';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    flex: 1,
  },

  scrollBody: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 24,
  },

  infoCard: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffffa9',
    alignItems: 'center',
    width: '95%',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
  },

  dd: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },

  dS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    flex: 1,
    borderColor: '#aaaaaa91',
    borderBottomWidth: 1,
    padding: 6,
  },

  Img: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
  },

  driverPic: {
    width: '100%',
    height: '100%',
  },

  TextsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%',
  },

  Bx: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: '100%',
    width: '50%',
  },

  Text1: {
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: 12,
    color: Color.primary,
  },

  Text2: {
    fontStyle: 'italic',
    fontSize: 10,
  },

  DriverNameContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  DriverName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },

  icon: {
    height: '70%',
    width: '70%',
    tintColor: Color.primary,
  },

  TripHistorial: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    marginTop: 4,
    padding: 4,
  },

  TripDetails: {
    flex: 2,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  InfoRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },

  TrajectIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    width: '100%',
    height: 64,
  },

  dateShow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
  },

  horizontalScroll: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },

  dateBtn: {
    width: 100,
    height: '50%',
    backgroundColor: Color.primary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
});

export default styles;
