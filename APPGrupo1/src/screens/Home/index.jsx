import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';

const Home = () => {
  const scaleValue = new Animated.Value(1);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

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
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
        resizeMode="contain"
      />
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
    height: '100%',
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
    backgroundColor: '#555',
  },
  whiteSquare: {
    backgroundColor: '#b8860b',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: '100%',
    marginBottom: 70,
    position: 'absolute',
  },
});

export default Home;
