import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import EventNavigator from './EventNavigator';
import { text } from '../config/styles';
import routeNames from '../config/routes';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [hideBottomTab, setHideBottomTab] = useState(false);
  const tabBarStyle = hideBottomTab
    ? {}
    : { height: 72, paddingTop: 16, paddingBottom: 16 };
  return (
    <Tab.Navigator
      options={{
        tabBarBadgeStyle: { backgroundColor: 'red' },
      }}
      tabBarOptions={{
        style: tabBarStyle,
        labelStyle: {
          ...text,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Events"
        component={EventNavigator}
        listeners={({ route }) => ({
          state: e => {
            const routes = route?.state?.routes;
            const currentRoute = routes ? routes[routes.length - 1] : {};

            setHideBottomTab(currentRoute.name === routeNames.IV_SCAN);
          },
        })}
        options={{
          tabBarVisible: !hideBottomTab,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={16} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
