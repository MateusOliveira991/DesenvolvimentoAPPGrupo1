import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, Button, Modal, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ProdutosContext } from '../../context/ProdutosContext';
import styles from "./styles";
import axios from 'axios';

const CadastroProduto = () => {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    descricao: '',
    nomeArquivo: '',
    valor: ''
  })

  const { cadastrar } = useContext(ProdutosContext)

  // const { handleConfirm } = useContext(ModalContext)
  // const { handleCancel } = useContext(ModalContext)

  // state para abrir o modal
  const [isVisible, setIsVisible] = useState(false);
  // state para saber a pessoa confirmou o cadastro
  const [isConfirm, setIsConfirm] = useState(false);

  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation();

  // só fecha o modal
  const confirmar = () => {
    // confirmar clicou que o usuário
    handleConfirm()
    setIsConfirm(true);
    setIsVisible(false);
    cadastrar(formData);
    console.log(formData);
    setFormData({});
  };

  const cancelar = () => {
    handleCancel();
    setIsVisible(false);
  };

  const handleConfirm = async () => {
    const { nomeProduto, descricao, nomeArquivo, valor } = formData
    // Lógica para confirmar a operação
    console.log("Operação confirmada!");
    setIsVisible(false);
    try {
      const response = await axios.post('https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos', {
        nomeProduto,
        descricao,
        nomeArquivo,
        valor
      })

      console.log(response)
      Alert.alert('Cadastro bem-sucedido!');
      navigation.navigate('Produtos');

    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      Alert.alert('Erro ao cadastrar produto. Tente novamente mais tarde.');
    }
  };

  const handleCancel = () => {
    // Lógica para cancelar a operação
    console.log("Operação cancelada!");
    setIsVisible(false);
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
        <Button title="Cadastrar" onPress={() => setIsVisible(true)} />
      </View>

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
                  <Button title="Confirmar" onPress={confirmar} />
                  <Button title="Cancelar" onPress={cancelar} />
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