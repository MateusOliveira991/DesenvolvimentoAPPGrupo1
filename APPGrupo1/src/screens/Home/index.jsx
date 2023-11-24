import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';

const NavigationBar = () => {
  const navigation = useNavigation();

  const navigateToRoute = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.navigationBar}>

      <TouchableOpacity onPress={() => navigateToRoute('Integrantes')}>
        <Text style={styles.navButton}>Integrantes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToRoute('Cadastro')}>
        <Text style={styles.navButton}>Cadastro Usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
  const scaleValue = useSharedValue(1);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    scaleValue.value = withRepeat(
      withSpring(1.2, { damping: 2, stiffness: 5 }),
      -1,
      true
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.checkerboard}>
        {[...Array(8)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {[...Array(8)].map((_, colIndex) => (
              <View
                key={colIndex}
                style={[
                  styles.square,
                  (rowIndex + colIndex) % 2 === 1 ? styles.blackSquare : styles.whiteSquare,
                ]}
              />
            ))}
          </View>
        ))}
      </View>

      <Animated.Image
        source={require('../../assets/logo.png')}
        style={[
          styles.image,
          animatedStyle,
        ]}
        resizeMode="contain"
      />

      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  checkerboard: {
    width: '100%',
    height: '90%',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  square: {
    flex: 1,
  },
  blackSquare: {
    backgroundColor: 'gray',
  },
  whiteSquare: {
    backgroundColor: 'gold',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 70,
    position: 'absolute',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  navButton: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    overflow: 'hidden',
  },

});

export default Home;
