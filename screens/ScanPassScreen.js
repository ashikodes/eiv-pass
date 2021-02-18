import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import ScanTapButton from '../components/ScanTapButton';
import { useNavigation } from '@react-navigation/native';

function ScanPassScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('IVScan');
  };

  return (
    <View style={styles.container}>
      <ScanTapButton onPress={onPress} />
      <AppText style={styles.text}>Tap to Pass</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
  },
  scanContainer: {
    width: '100%',
    height: '100%',
  },
});

export default ScanPassScreen;
