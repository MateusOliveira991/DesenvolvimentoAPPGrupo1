
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import detetive from "../../assets/detetive.jpg";
import cara from "../../assets/cara.webp";
import jumanji from "../../assets/jumanji.webp";
import zathura from "../../assets/zathura.jpg";
import ouija from "../../assets/ouija.jpg";
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'

  const Descricao = ({ navigation, route }) => {
  const [imagem, setImagem] = useState(route.params?.imagem || detetive);
  const [texto, setTexto] = useState(route.params?.texto || "Produtos:");

  const handleFechar = () => {
    switch (imagem) {
      case cara:
        setImagem(jumanji);
        setTexto("jumanji");
        break;
      case detetive:
        setImagem(zathura);
        setTexto("zathura");
        break;
      case jumanji:
        setImagem(ouija);
        setTexto("ouija");
        break;
      case zathura:
        setImagem(cara);
        setTexto("cara");
        break;
      case ouija:
        setImagem(detetive);
        setTexto("detetive");
        break;
      default:
        setImagem(detetive);
        setTexto("detetive");
        break;
    }
    };
  
  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.image} />
      <Text style={styles.text}>{texto}</Text>

      {route.params ? (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Descricao")}>
            <Ionicons name="settings-sharp" size={24} color="black" onPress={handleFechar} />
            <Text style={styles.iconText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      ) : (
       
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Descricao", { imagem: jumanji, texto: "jumanji" })}>
            <Text style={styles.blueText}>Jumanji</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Descricao", { imagem: zathura, texto: "zathura" })}>
            <Text style={styles.blueText}>Zathura</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Descricao", { imagem: ouija, texto: "ouija" })}>
            <Text style={styles.blueText}>Ouija</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Descricao", { imagem: cara, texto: "cara" })}>
            <Text style={styles.blueText}>Cara-a-Cara</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Descricao", { imagem: detetive, texto: "detetive" })}>
            <Text style={styles.blueText}>Detetive</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Descricao
