import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
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

    
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    
    if (senha !== confirmarSenha) {
      Alert.alert('As senhas não coincidem!');
      return;
    }

    try {
      
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
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formData.nome}
        onChangeText={(value) => setFormData({ ...formData, nome: value })}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => setFormData({ ...formData, email: value })}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={formData.senha}
        onChangeText={(value) => setFormData({ ...formData, senha: value })}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmação de Senha"
        value={formData.confirmarSenha}
        onChangeText={(value) => setFormData({ ...formData, confirmarSenha: value })}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={cadastrarUsuario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 10,
    width: '80%', 
  },
});
