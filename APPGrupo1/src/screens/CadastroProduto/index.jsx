import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Text, View, Modal, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from "./styles";

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    descricao: '',
    nomeArquivo: '',
    valor: ''
  })

  // state para abrir o modal
  const [isVisible, setIsVisible] = useState(true);
  // state para saber a pessoa confirmou o cadastro
  const [isConfirm, setIsConfirm] = useState(false);

  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation();

  // só fecha o modal
  const handleConfirm = () => {
    // confirmar clicou que o usuário
    setIsConfirm(true);
    setIsVisible(false);
  };

  // faz a mesma coisa
  const handleCancel = () => {
    setIsVisible(false);
  };

  const cadastrarProduto = async () => {
    const { nomeProduto, descricao, nomeArquivo, valor } = formData;

    if (isConfirm) {
      try {
        setIsLoading(true)
        const response = await axios.post('https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos', {
          nomeProduto,
          descricao,
          nomeArquivo,
          valor
        })

        setIsLoading(false)
        //MODAL NO LUGAR DO ALERT
        //STATE PARA DOIS MODAIS
        //MUDAR A DINÂMICA DO ISLOADING ""
        //
        Alert.alert('Cadastro bem-sucedido!');
        navigation.navigate('Produtos');

      } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        Alert.alert('Erro ao cadastrar produto. Tente novamente mais tarde.');
      }
    } else {
      return;
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
        <Button title="Cadastrar" onPress={() => { setIsVisible(true); cadastrarProduto(); handleClear() }} />
      </View>

      // TRAZER O MODAL AQUI
      <Modal
        animationType="slide" // Alterei a animação para slide, mas você pode escolher a que preferir
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {isLoading && (
              <ActivityIndicator />
            )}
            {!isLoading && (
              <>
                <Text style={styles.modalText}>Confirmar a Operação?</Text>

                <View style={styles.buttonContainer}>
                  <Button title="Confirmar" onPress={handleConfirm} />
                  <Button title="Cancelar" onPress={handleCancel} />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CadastroProduto