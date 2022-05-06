import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userInfoContainer:{
       flex: 1,
       alignContent: 'center',
       justifyContent: 'center',
       marginBottom: 32,
       marginTop: 16 ,
       width: '100%'    
    },
    userContent:{      
       alignSelf:'center',
       justifyContent:'center',
       backgroundColor:'#eee',
       height: 110,
       width: 110, 
       borderRadius: 100
       },
    profilePhoto:{
       alignSelf:'center' ,
       height: 100, 
       width: 100, 
       borderRadius: 100
      },
    screens:{
       width: '100%', 
       flexDirection: 'row', 
       alignItems:'center',
       marginBottom: 16,
       borderRadius: 4,
       padding: 8,
       borderBottomWidth:1,
     borderColor: '#eee'
    },
    userDescription:{
       justifyContent: 'flex-start',
       alignItems: 'flex-start',
       padding: 4,
       marginLeft: 8
    },
    nameTxt:{
       textAlign: 'center',
       textTransform: 'capitalize',
       fontSize: 16,
       fontWeight: 'bold',
       color: 'black',
       fontStyle:'italic'
    },
    emailTxt:{
       textAlign: 'center',
       textTransform: 'capitalize',
       fontSize: 16,
       fontWeight: 'bold',
       color: 'grey',
       fontStyle:'italic'
    },
    desTxt:{
       color: 'grey'
    },
    markUps:{
       flexDirection: 'row',
       justifyContent:'space-around',
       alignItems: 'center',
       marginTop: 4,
       borderBottomWidth: 1, 
       width: '90%',
       marginLeft: 5,
       borderColor: '#ccc',
       marginBottom: 32,
       paddingBottom: 8
 
    },
    primary:{
       textTransform: 'capitalize',
       fontWeight: 'bold',
       fontSize: 16,
       color: 'grey',
    },
    num:{
       color: 'red',
       fontSize: 12.5
    },
    drawerScreens:{
       width: '90%',
       flexDirection:'row',
       alignItems: 'center',
       justifyContent: 'flex-start',
       
    },
    btnText:{
       fontSize: 16,
       marginLeft: 8,
       textTransform:'capitalize',
    },
    IconStyle:{
      height: 30,
      width: 30,
      tintColor:'#54311c'
    }
 })
 export default styles;