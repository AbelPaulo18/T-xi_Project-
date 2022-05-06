import {StyleSheet} from 'react-native';

import {Color} from '../../../Assets/Colors';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  moneyMovmentCard: {
    flex: 0.2,
    alignItems: 'center',
  },

  depoAndWith: {
    flexDirection: 'row',
    width: '95%',
    height: '80%',
    backgroundColor: Color.lowOpc,
    borderRadius: 8,
  },

  deposit: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    width: '50%',
    borderBottomLeftRadius: 32,
  },

  withDraw: {
    flex: 1,
    width: '50%',
    borderBottomRightRadius: 32,
    borderLeftWidth: 1,
    alignItems: 'center',
  },

  primaryTxt: {
    fontSize: 20,
    color: '#976e3b',
  },

  actionBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    width: 100,
    height: 40,
  },

  Icons: {
    height: 40,
    width: 40,
  },

  walletInfoCont: {
    elevation: 5,
    width: '90%',
    backgroundColor: '#976e3b',
    height: '90%',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  balance: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ffe',
    marginTop: 8,
    paddingBottom: 4,
  },

  balance2: {
    flex: 1.8,
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingTop: 16,
    borderBottomWidth: 1,
    borderColor: '#ffe',
  },

  balance3: {
    flex: 0.6,
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingTop: 4,
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
    backgroundColor: '#976e3b',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
  },

  dateShow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
  },

  creditInfo: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  subInfo: {
    flexDirection: 'row',
    width: '28%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  money: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },

  smallText: {
    fontSize: 13,
    marginBottom: 24,
    color: '#ffe',
  },

  smallText2: {
    fontSize: 13,
    marginBottom: 2,
    color: '#ffe',
  },

  bigText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 24,
    fontStyle: 'italic',
  },

  bigText2: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  }, //#54311c

  walletBtn: {
    height: '25%',
    width: '60%',
    backgroundColor: '#976e3b',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  movementsBtn: {
    width: '100%',
    borderRadius: 6,
    marginTop: 16,
  },

  totalAmmount: {
    flex: 0.13,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '55%',
    borderRadius: 8,
  },

  TotalCredittxt: {
    textAlign: 'center',
    fontSize: 29,
    color: 'white',
    fontWeight: 'bold',
    color: 'white',
  },

  walletHist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoHist: {
    width: '30%',
    backgroundColor: Color.lowOpc,
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    width: '40%',
    backgroundColor: Color.lowOpc,
    height: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dateHist: {
    width: '30%',
    backgroundColor: Color.lowOpc,
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  method: {
    height: 30,
    minWidth: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
    opacity: 1,
  },
});

export default styles;
