import {StyleSheet} from 'react-native';
import {Color} from '../../../Assets/Colors';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  photoContainer: {
    height: 120,
    width: 120,
    elevation: 10,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: Color.primary,
    marginTop: 16,
  },
  userPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  scrollBody: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    paddingLeft: 24,
    height: 50,
    width: '80%',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: Color.primary,
  },
  txt: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: Color.primary,
  },
  saveBtn: {
    height: 50,
    width: '60%',
    backgroundColor: Color.primary,
    borderRadius: 6,
    marginTop: 24,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
