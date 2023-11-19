import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import detetiveImg from "../../assets/detetive.jpg";
import caraImg from "../../assets/cara.webp";
import { Ionicons } from '@expo/vector-icons';

const Descricao = ({ navigation, route }) => {
  const [imagem, setImagem] = useState(route.params.imagem);
  const [texto, setTexto] = useState(route.params.texto);

  const handleFechar = () => {
    if (imagem === detetiveImg) {
      setImagem(caraImg);
      setTexto("cara");
    } else {
      setImagem(detetiveImg);
      setTexto("detetive");
    }
  };

  return (
    <View>
      <Image source={imagem} style={{ width: '55%', height: '100%', marginTop: 90 }} />

      <Text>
        {texto}
      </Text>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Produtos")}>
          <Ionicons name="settings-sharp" size={24} color="black" onPress={handleFechar} />
          <Text>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Descricao;
