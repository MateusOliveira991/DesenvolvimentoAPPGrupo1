import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Cadastro from '../screens/Cadastro';
import CadastroProduto from '../screens/CadastroProduto';
import Descricao from '../screens/Descricao';
import Home from '../screens/Home';
import Integrantes from '../screens/Integrantes';
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
      <Tab.Screen name='Cadastrar Produto' component={CadastroProduto} />
    </Tab.Navigator>
  )
}

function Stacks() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          
          <Stack.Screen name="Descrições" component={Descricao} />
          <Stack.Screen name='Home' component={Home} />
        </>
      ) : (
        <Stack.Screen name='Login' component={Login} />
      )}
    </Stack.Navigator>
  );
}

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true
        }}
      >
        <Drawer.Screen name='Início' component={Tabs}/>
        <Drawer.Screen name='Descricao' component={Stacks}
          options={{
            drawerItemStyle: { height: 0 }
          }} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Produtos" component={Produtos} />
        <Drawer.Screen name="Teste" component={CadastroProduto} />
        <Drawer.Screen name="Integrantes" component={Integrantes} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};