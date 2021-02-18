import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

function BarCodeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [torch, setTorch] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarScanned = ({ type, data }) => {
    console.log(`Scanned: ${type} and ${data}`);
  };

  const toggleCameraTorch = () => {
    const cameraTorch =
      torch === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off;
    setTorch(cameraTorch);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      flashMode={torch}
      style={styles.scanContainer}
      barCodeScannerSettings={{
        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
      }}
      onBarCodeScanned={handleBarScanned}
    >
      <View style={styles.topBlurView} />
      <View style={styles.rowFlex}>
        <View style={styles.blurView} />
        <ImageBackground
          resizeMethod="resize"
          resizeMode="cover"
          source={require('../assets/scan-area.png')}
          style={styles.scanArea}
        ></ImageBackground>
        <View style={styles.blurView} />
      </View>
      <View style={styles.blurView} />
      <TouchableOpacity style={styles.flashIcon} onPress={toggleCameraTorch}>
        <Image source={require('../assets/scan-flash.png')} />
      </TouchableOpacity>
    </Camera>
  );
}

const styles = StyleSheet.create({
  scanContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  topBlurView: {
    backgroundColor: 'rgba(196, 196, 196, 0.2)',
    height: 180,
  },
  blurView: {
    backgroundColor: 'rgba(196, 196, 196, 0.2)',
    flex: 1,
  },
  rowFlex: {
    flexDirection: 'row',
  },
  scanArea: {
    width: 282,
    height: 244,
  },
  flashIcon: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});

export default BarCodeScreen;
