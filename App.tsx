import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DiskDataList from './components/disk/DiskDataList';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="Disk">
        <Drawer.Screen name="Disk" component={DiskDataList} />
      </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Disk"
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableHighlight onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Icon name='menu'></Icon></TouchableHighlight>),
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
