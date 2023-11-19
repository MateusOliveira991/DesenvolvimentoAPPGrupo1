import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import Cadastro from '../screens/Cadastro';
import Descricao from '../screens/Descricao';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Produtos from '../screens/Produtos';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarPosition='bottom'>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Produtos' component={Produtos} />
      <Tab.Screen name='Cadastro' component={Cadastro} />
    </Tab.Navigator>
  )
}

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true
        }}
      >
        <Drawer.Screen name='Tabs' component={Tabs}
          options={{
            drawerItemStyle: { height: 0 }
          }} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Produtos" component={Produtos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};