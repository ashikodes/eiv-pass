import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import HomeHeader from '../components/HomeHeader';
import ScanPassScreen from './ScanPassScreen';

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]} />
);

function HomeTabView(props) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'pass', title: 'Pass' },
    { key: 'second', title: 'Events' },
  ]);

  const renderScene = SceneMap({
    pass: ScanPassScreen,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={HomeHeader}
      onIndexChange={setIndex}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default HomeTabView;
