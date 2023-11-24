

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import jumanji from '../../assets/jumanji.webp';
import ouija from '../../assets/ouija.jpg';
import zathura from '../../assets/zathura.jpg';
import detetive from '../../assets/detetive.jpg';
import jenga from '../../assets/jenga.webp';
import cara from '../../assets/cara.webp';

const Descricao = ({ navigation }) => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nomeProduto: 'Jumanji',
      descricao:
        'Jumanji é um jogo de tabuleiro cooperativo para 2 a 4 jogadores. O objetivo do jogo é chegar ao centro do tabuleiro e gritar "JUMANJI!" antes que algum jogador perca todos os seus Life Tokens. Os jogadores devem rolar os dados, mover suas peças pelo tabuleiro e enfrentar uma variedade de desafios, como enigmas, corridas e perigos. O jogador que chegar ao centro do tabuleiro primeiro e gritar "JUMANJI!" ganha o jogo.',
     
      imagem: jumanji,
    },
    {
      id: 2,
      nomeProduto: 'Ouija',
      descricao:
        'O tabuleiro Clássico OUIJA é garantia de diversão! Faça suas perguntas e receba respostas do Oráculo Mistificador em uma placa de madeira grossa e resistente com gráficos originais. Criado em 1890, o OUIJA ainda é popular nos EUA. Os participantes colocam os dedos sobre o indicador que então se move pelo tabuleiro até as letras, números ou as palavras "sim" ou "não" para responder perguntas e trazer mensagens.',
     
      imagem: ouija,
    },
    {
      id: 3,
      nomeProduto: 'Zathura',
      descricao:
        'Baseado no filme, os jogadores correm para chegar ao planeta Zathura. O jogo é uma réplica do filme em muitos aspectos, incorporando um turno chave que produz cartas de jogo, um robô que se move ao longo do tabuleiro para impedir o progresso do jogador, e um quebra-cabeça que se desfaz.',
      
      imagem: zathura,
    },
    {
      id: 4,
      nomeProduto: 'Detetive',
      descricao:
        'Um jogo de investigação acima de qualquer suspeita! Como um verdadeiro Sherlock, você está lá. Só que além de detetive, você também é um suspeito! Para chegar cada vez mais perto da solução deste mistério, vá entrando com seu peão nos possíveis locais do crime e dando palpites sobre o culpado e arma usada.',
      
      imagem: detetive,
    },
    {
      id: 5,
      nomeProduto: 'Jenga',
      descricao:
        'Cada movimento conta neste jogo de estratégia. De onde sairá a peça? Da base, do meio ou do topo? Os jogadores devem empilhar e equilibrar os blocos de madeira sem deixar a torre cair. Perde quem deixar a pilha cair na sua vez de jogar.',
     
      imagem: jenga,
    },
    {
      id: 6,
      nomeProduto: 'Cara-a-Cara',
      descricao:
        'É loira? É mulher? Tem olhos verdes? Faça quantas perguntas precisar para descobrir qual é a "cara" do seu adversário. Ganha quem fizer as perguntas certas e adivinhar o personagem do seu oponente.',
     
      imagem: cara,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, paddingVertical: 10 }}>Produtos:</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            <Text style={styles.titulo}>{item.id}</Text>
            <Text style={styles.titulo}>{item.nomeProduto}</Text>

            <Image source={item.imagem} style={{ width: '100%',
            height: 300,
            resizeMode: 'cover',
            borderRadius: 8,
            marginVertical: 10, }} />

            <Text style={styles.descricao}>{item.descricao}</Text>
           

      
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: 'gray',
  },
  headerText: {
    fontSize: 25,
    color: 'white',
    paddingBottom: 10,
  },
  lista: {
    backgroundColor: 'gold',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  nomeProduto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  descricao: {
    color: '#444',
    fontSize: 16,
  },
});

export default Descricao;
