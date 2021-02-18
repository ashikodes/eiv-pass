import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ScanTapButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LottieView
        resizeMode="cover"
        autoPlay
        loop
        style={styles.animation}
        source={require('../assets/animations/scan-tap.json')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 250,
    height: 250,
  },
  container: {},
});

export default ScanTapButton;
