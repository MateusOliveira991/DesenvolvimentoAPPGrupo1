import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    descricao: '',
    nomeArquivo: '',
    valor: ''
  })

  const navigation = useNavigation();

  const cadastrarProduto = async () => {
    const { nomeProduto, descricao, nomeArquivo, valor } = formData;

    try {

      const response = await axios.post('https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos', {
        nomeProduto,
        descricao,
        nomeArquivo,
        valor
      })

      Alert.alert('Cadastro bem-sucedido!');
      navigation.navigate('Produtos');

    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      Alert.alert('Erro ao cadastrar produto. Tente novamente mais tarde.');
    }
  }

  const handleClear = () => {
    setFormData({});
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Cadastro de Produto</Text>
      <View style={styles.form}>
        <Text style={styles.texto}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder='Nome do produto'
          maxLength={40}
          value={formData.nomeProduto}
          onChangeText={(value) => setFormData({ ...formData, nomeProduto: value })}
        />
        <Text style={styles.texto}>Descrição:</Text>
        <TextInput
          style={styles.input}
          placeholder='Descrição'
          maxLength={100}
          value={formData.descricao}
          onChangeText={(value) => setFormData({ ...formData, descricao: value })}
        />
        <Text style={styles.texto}>Valor:</Text>
        <TextInput
          style={styles.input}
          placeholder='Valor'
          keyboardType='numeric'
          maxLength={10}
          value={formData.valor}
          onChangeText={(value) => setFormData({ ...formData, valor: value })}
        />
        <Text style={styles.texto}>Nome do arquivo:</Text>
        <TextInput
          style={styles.input}
          placeholder='Nome do arquivo'
          maxLength={20}
          value={formData.nomeArquivo}
          onChangeText={(value) => setFormData({ ...formData, nomeArquivo: value })}
        />
        <Button title="Cadastrar" onPress={() => { cadastrarProduto(); handleClear() }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    flex: 1,
    width: "90%",
    fontSize: 35,
  },
  texto: {
    fontSize: 20
  },
  input: {
    fontSize: 15,
    paddingBottom: 10
  }
})


export default CadastroProduto