import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather, EvilIcons } from "@expo/vector-icons"

const Produtos = () => {
  const [produtos, setProdutos] = useState()

  const navigation = useNavigation();

  useEffect(() => {
    axios.get("https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos")
      .then(response => {
        setProdutos(response.data)
      }).catch(() => {
        Alert.alert("Não foram encontrados produtos")
        navigation.navigate("Home")
      })
  }, [])

  function excluirProduto(id) {
    axios.delete(`https://655a8d516981238d054d8fe9.mockapi.io/g1/produtos/${id}`)
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, paddingVertical: 10 }}>Produtos:</Text>
      <View>
        <FlatList

          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.lista}>
              <Text style={styles.titulo}>{item.nomeProduto}</Text>
              <Image
                source={{ uri: `../../assets/${item.nomeArquivo}` }}
                style={styles.imagem}
              />

              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.valor}>Valor: R${item.valor}</Text>

              <TouchableOpacity onPress={() => excluirProduto(item)}>
                <EvilIcons name="trash" size={18} color={"black"} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lista: {
    paddingBottom: 20
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold"
  },
  imagem: {
    width: 100,
    height: 50
  },
  descricao: {
    fontSize: 18

  },
  valor: {
    fontSize: 18

  }
})

export default Produtos;
