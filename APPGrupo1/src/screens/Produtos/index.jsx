import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import detetiveImg from "../../assets/detetive.jpg";
import caraImg from "../../assets/cara.webp";

const Produtos = ({ navigation }) => {
  const handleMostrarCara = () => {
    navigation.navigate("Descricao", { imagem: caraImg, texto: "cara" });
  };

  const handleMostrarDetetive = () => {
    navigation.navigate("Descricao", { imagem: detetiveImg, texto: "detetive" });
  };

  return (
    <View>
      <View>
        <Image source={caraImg} style={{ width: '55%', height: '100%', marginTop: 90 }} />
      </View>

      <Text>
        Descrição Cara
      </Text>

      <TouchableOpacity onPress={handleMostrarCara}>
        <Text>Mostrar Cara</Text>
      </TouchableOpacity>

      <View>
        <Image source={detetiveImg} style={{ width: '55%', height: '100%', marginTop: 90 }} />
      </View>

      <Text>
        Produto: Detetive
      </Text>

      <TouchableOpacity onPress={handleMostrarDetetive}>
        <Text>Descrição Detetive</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Produtos;
