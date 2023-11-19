import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import Produtos from '../Screens/Produtos';
import Descricao from '../Screens/Descricao';




const Stack = createNativeStackNavigator();

export const Rotas = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Descricao" component={Descricao} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};