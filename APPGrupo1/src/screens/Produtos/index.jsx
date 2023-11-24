import { EvilIcons } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";

const Produtos = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    axios
      .get("https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch(() => {
        Alert.alert("Não foram encontrados produtos");
        navigation.navigate("Home");
      });
  }, [1000]);

  function excluirProduto(id) {
    try {
      setIsLoading(true);
      handleConfirm();
      axios.delete(`https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos/${id}`);
      setProdutos(produtos.filter((produto) => produto.id !== id));
      setIsLoading(false);
      setIsVisible(false);
      Alert.alert('Deletei!');
      navigation.navigate('Produtos');
    } catch (error) {
      console.error('Erro ao Deletar:', error);
      Alert.alert('Erro ao Deletar produto. Tente novamente mais tarde.');
    } finally {
      setItemToDelete(null);
    }
  }

  const handleConfirm = () => {
    console.log("Operação confirmada!");
    // Additional logic for confirmation if needed
  };

  const handleCancel = () => {
    setIsVisible(false);
    setItemToDelete(null);
    // Logic for cancellation
  };

  const showDeleteModal = (id) => {
    setItemToDelete(id);
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, paddingVertical: 10 }}>Produtos:</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <Text style={styles.titulo}>{item.id}</Text>
            <Text style={styles.titulo}>{item.nomeProduto}</Text>

            <Image
              source={{ uri: `../../assets/${item.nomeArquivo}` }}
              style={styles.imagem}
            />

            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.valor}>Valor: R${item.valor}</Text>

            <Button
              title="Descrição"
              onPress={() =>
                navigation.navigate("Descricao", { id: item.id })
              }
            />

            <TouchableOpacity onPress={() => showDeleteModal(item.id)}>
              <EvilIcons name="trash" size={18} color={"black"} />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Modal for delete confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.textoModal}>Deseja confirmar a operação?</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.botaoModalConfirmar}
                  onPress={() => excluirProduto(itemToDelete)}>
                  <Text style={styles.botaoModalTextoConfirmar}>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.botaoModalCancelar}
                  onPress={handleCancel}>
                  <Text style={styles.botaoModalTextoCancelar}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Produtos;
