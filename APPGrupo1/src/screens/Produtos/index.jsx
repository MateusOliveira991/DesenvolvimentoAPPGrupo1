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
        <Image source={caraImg} style={{ width: "100%", height: 500, marginTop: 90 }} />
      </View>

      <Text>
        Jogo Cara
      </Text>

      <TouchableOpacity onPress={handleMostrarCara}>
        <Text>Descrição Cara</Text>
      </TouchableOpacity>

      <View>
        <Image source={detetiveImg} style={{ width: '55%', height: 'auto', marginTop: 90 }} />
      </View>

      <Text>
        Jogo Detetive
      </Text>

      <TouchableOpacity onPress={handleMostrarDetetive}>
        <Text>Descrição Detetive</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Produtos;
