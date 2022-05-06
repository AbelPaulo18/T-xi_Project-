import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  slideCont: {
    flex: 1,
    backgroundColor: '#cccfff',
    width: '100%',
  },
  optionsCont: {
    flex: 1.4,
    backgroundColor: '#fffccc',
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  // backgroundColor:'#976e3bd7',
  // backgroundColor:'#7a4423d8',
  infoBox: {
    height: '80%',
    width: '42%',
    backgroundColor: '#976e3b79',
    margin: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    flexDirection: 'column-reverse',
  },
  cont: {
    height: 50,
    width: '100%',
    backgroundColor: '#976e3b',
    paddingLeft: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  opacy: {
    height: 40,
    width: 40,
    alignItems: 'center',
  },
  menu: {
    height: 40,
    tintColor: '#fff',
    width: 30,
  },
  txt: {
    fontSize: 16,
    color: '#fff',
    marginTop: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  Icon: {
    height: '50%',
    width: '50%',
    tintColor: '#fff',
  },
});
//#ffffff99
export default styles;
