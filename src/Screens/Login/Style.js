import { StyleSheet } from 'react-native';
import { Color } from '../../Assets/Colors'

const styles = StyleSheet.create({
  
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'column',
      backgroundColor: Color.primary
    },
    InpContainer:{
      flex:2,
      width:'100%',
      alignItems:'center',
    },
    Inputs:{
      height: 50,
      width: '80%',
      paddingLeft: 16,
      borderColor: '#f5f5fa59',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 4 ,
      backgroundColor: Color.InputBackColor
    },
    logBtn:{
      backgroundColor: Color.darkerPrimary,
      height: 40,
      width: '80%',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 4,
      marginTop: 4
    },
    SigBtn:{
      marginTop:16
    }

  })
  export default styles;