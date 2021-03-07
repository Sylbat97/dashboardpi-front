import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DiskDataListContainer from './components/disk/DiskDataListContainer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import OverviewContainer from './components/overview/OverviewContainer';
import {
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Overview">
      <Drawer.Screen name="Overview" component={OverviewContainer} />
      <Drawer.Screen name="Disk" component={DiskDataListContainer} />
    </Drawer.Navigator>
  );
}


export default function App() {
  StatusBar.setBarStyle( 'light-content',true)
  StatusBar.setBackgroundColor('#000000')
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Overview"
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableHighlight  style={{marginLeft: 10}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Icon size={40} name='menu'></Icon></TouchableHighlight>),
        })}>
        <Stack.Screen
          name="DashboardPi"
          component={DrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
