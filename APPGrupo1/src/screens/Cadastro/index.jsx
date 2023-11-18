import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const navigation = useNavigation();

  const cadastrarUsuario = async () => {
    const { nome, email, senha, confirmarSenha } = formData;

    // Validar se os campos obrigatórios foram preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    // Validar se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
      Alert.alert('As senhas não coincidem!');
      return;
    }

    try {
      // Enviar a solicitação para a API de cadastro
      const response = await axios.post('https://6513726b8e505cebc2e9db94.mockapi.io/clientes', {
        nome,
        email,
        senha,
      });

      if (response.status === 201) {
        Alert.alert('Cadastro bem-sucedido!', 'Obrigado por se cadastrar.');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastro de Usuário</Text>
      <TextInput
        placeholder="Nome"
        value={formData.nome}
        onChangeText={(value) => setFormData({ ...formData, nome: value })}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => setFormData({ ...formData, email: value })}
      />
      <TextInput
        placeholder="Senha"
        value={formData.senha}
        onChangeText={(value) => setFormData({ ...formData, senha: value })}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirmação de Senha"
        value={formData.confirmarSenha}
        onChangeText={(value) => setFormData({ ...formData, confirmarSenha: value })}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={cadastrarUsuario} />
    </View>
  );
}