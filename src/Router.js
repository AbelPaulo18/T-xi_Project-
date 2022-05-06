import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Update from './Screens/Update/Update';
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp';
import Home from './Screens/Home/Home';
import Profile from './Screens/Drawer/Profile/Profile';
import Historic from './Screens/Drawer/Historic/Historic';
import Terms from './Screens/Drawer/Terms/Terms';
import Wallet from './Screens/Drawer/Wallet/Wallet';
import DrawerContent from './Screens/Drawer/DrawerContent/DrawerContent';

import Taxi_Map from './Screens/Taxi_Map_view/Taxi';

import DrawerScreensHeader from './Components/TopHeaders/DrawerScreensHeader';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerScreens() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Historic"
          component={Historic}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CarMap"
          component={Taxi_Map}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function StackedScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Update">
        <Stack.Screen
          name="Update"
          component={Update}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Main"
          component={DrawerScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackedScreens;
