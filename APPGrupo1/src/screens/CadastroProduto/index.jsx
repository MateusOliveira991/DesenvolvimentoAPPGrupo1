import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, Button, Modal, Text, TextInput, View } from 'react-native';
import { ProdutosContext } from '../../context/ProdutosContext';
import styles from "./styles";
import axios from 'axios';

const CadastroProduto = () => {
  const initialFormData = {
    nomeProduto: '',
    descricao: '',
    nomeArquivo: '',
    valor: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const { cadastrar } = useContext(ProdutosContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const confirmar = async () => {
    try {
      setIsLoading(true);
      handleConfirm();
      setIsVisible(false);

      await axios.post('https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos', formData);

      Alert.alert('Cadastro bem-sucedido!');
      navigation.navigate('Produtos');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      Alert.alert('Erro ao cadastrar produto. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
      setFormData(initialFormData);
    }
  };

  const cancelar = () => {
    handleCancel();
    setIsVisible(false);
    setFormData(initialFormData); 
  };
  
  const handleConfirm = () => {
    console.log("Operação confirmada!");
    // Additional logic for confirmation if needed
  };

  const handleCancel = () => {
    console.log("Operação cancelada!");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Cadastro de Produto</Text>
      <View style={styles.form}>
        {['nomeProduto', 'descricao', 'valor', 'nomeArquivo'].map((field) => (
          <View key={field}>
            <Text style={styles.texto}>{field.charAt(0).toUpperCase() + field.slice(1)}:</Text>
            <TextInput
              style={styles.input}
              placeholder={`Digite o(a) ${field}`}
              maxLength={field === 'valor' ? 10 : 40}
              keyboardType={field === 'valor' ? 'numeric' : 'default'}
              value={formData[field]}
              onChangeText={(value) => setFormData({ ...formData, [field]: value })}
            />
          </View>
        ))}
        <Button title="Cadastrar" onPress={() => setIsVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
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
  );
};

export default CadastroProduto;
