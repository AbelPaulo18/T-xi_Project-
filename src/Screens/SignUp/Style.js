import {StyleSheet} from 'react-native';
import {Color} from '../../Assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Incontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
  },
  accountDetails: {
    width: '100%',
    flex: 5,
    alignItems: 'center',
  },
  NextBtn: {
    width: '80%',
    height: 50,
    backgroundColor: Color.darkerPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
export default styles;
