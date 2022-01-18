import React from 'react';
import { ImageBackground, Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import colors from '../config/colors';
import { TabBar } from 'react-native-tab-view';
import { text } from '../config/styles';
import AppText from './AppText';

function HomeHeader(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod="resize"
        resizeMode="repeat"
        source={require('../assets/pass-arrow.png')}
        style={styles.image}
      ></ImageBackground>
      <AppText style={styles.text}>
        Hello{' '}
        <AppText style={{ ...styles.text, fontWeight: '800' }}>Kodi,</AppText>
      </AppText>
      <TabBar
        {...props}
        style={styles.tabBar}
        labelStyle={styles.labelStyle}
        indicatorStyle={styles.indicatorStyle}
        contentContainerStyle={styles.contentContainerStyle}
        indicatorContainerStyle={styles.indicatorContainerStyle}
        tabStyle={styles.tabStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPrimary,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 26,
    position: 'relative',
  },
  image: {
    width: '100%',
    opacity: 0.1,
    position: 'absolute',
    height: '100%',
    top: Constants.statusBarHeight,
    left: 26,
  },
  labelStyle: {
    ...text,
    fontSize: 18,
    textTransform: 'capitalize',
    width: 113,
    textAlign: 'center',
    paddingBottom: 10,
  },
  indicatorStyle: {
    width: 113,
    backgroundColor: colors.darkGreen,
  },
  tabStyle: {
    ...Platform.select({ ios: { height: 50 }, android: { height: 60 } }),
    width: 113,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '300',
    paddingVertical: 35,
    paddingLeft: 10,
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
});

export default HomeHeader;
