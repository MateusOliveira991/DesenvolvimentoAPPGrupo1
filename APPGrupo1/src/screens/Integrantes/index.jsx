import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IntegranteCard = ({ nome, descricao, github }) => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const obterPerfilGithub = async () => {
      try {
        const resposta = await fetch(`https://api.github.com/users/${github.split('/').pop()}`);
        const dados = await resposta.json();
        setPerfil(dados);
      } catch (erro) {
        console.error('Erro ao obter informações do perfil do GitHub:', erro);
      }
    };

    obterPerfilGithub();
  }, [github]);

  const abrirGithub = async (url) => {
    try {
      const suportaDeeplinking = await Linking.canOpenURL(url);

      if (suportaDeeplinking) {
        await Linking.openURL(url);
      } else {
        console.error('Não foi possível abrir o link. Verifique se o aplicativo GitHub está instalado.');
      }
    } catch (erro) {
      console.error('Erro ao abrir o link do GitHub:', erro);
    }
  };

  return (
    <View style={styles.integranteContainer}>
      {perfil && (
        <Image
          source={{ uri: perfil.avatar_url }}
          style={styles.imagemPerfil}
          resizeMode="cover"
        />
      )}
      <View style={styles.nomeContainer}>
        <Icon name="user" size={16} color="#333" />
        <Text style={styles.nome}>{nome}</Text>
      </View>
      <View style={styles.descricaoContainer}>
        <Icon name="comment" size={16} color="#666" />
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
      <TouchableOpacity onPress={() => abrirGithub(github)}>
        <View style={styles.githubContainer}>
          <Icon name="github" size={24} color="#333" />
          <Text style={styles.github}>{github}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CardIntegrantes = ({ title, children }) => {
  const [scaleValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  return (
    <Animated.View
      style={[
        styles.cardContainer,
        {
          transform: [
            {
              scale: scaleValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1.2, 1],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </Animated.View>
  );
};

const IntegrantesPage = () => {
  const integrantes = [
    {
      nome: 'CARLOS ALBERTO MOREIRA DA PAZ',
      descricao: 'Tio CACAIO, entendeu manuu, PORR.',
      github: 'https://github.com/CarlosAlbertoMPZ',
    },
    {
      nome: 'MATEUS AUGUSTO DE OLIVEIRA',
      descricao: 'AII BRASIL!!!!!!!',
      github: 'https://github.com/MateusOliveira991',
    },
    {
      nome: 'PEDRO HENRIQUE CARNEIRO RIBEIRO TEIXEIRA',
      descricao: 'Pato no tupiniquim.',
      github: 'https://github.com/PedroTeixeira13',
    },
    {
      nome: 'RODRIGO BERREDO LEAL FERREIRA AMADO',
      descricao: 'Segura a marimba aí mon amour!',
      github: 'https://github.com/rblfa',
    },
    {
      nome: 'THIAGO FREDERICO BELLATO',
      descricao: '... 🤐',
      github: 'https://github.com/thiagobellato',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <CardIntegrantes title="Página de Integrantes do Grupo 1">
        {integrantes.map((integrante, index) => (
          <IntegranteCard key={index} {...integrante} />
        ))}
      </CardIntegrantes>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  cardContainer: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  integranteContainer: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagemPerfil: {
    width: 100,
    height: 100,
    borderRadius:    50,
    marginBottom: 8,
  },
  nomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  descricaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    marginLeft: 8,
    color: '#666',
  },
  githubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  github: {
    marginLeft: 8,
    color: '#007bff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default IntegrantesPage;

