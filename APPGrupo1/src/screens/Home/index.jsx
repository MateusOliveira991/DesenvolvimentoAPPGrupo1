import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSpring,
  Easing,
} from 'react-native-reanimated';

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
});

export default Home;
