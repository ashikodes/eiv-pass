import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabView from '../screens/HomeTabView';
import BarCodeScreen from '../screens/BarCodeScreen';
import colors from '../config/colors';
import { text } from '../config/styles';
import routes from '../config/routes';

const Stack = createStackNavigator();
const EventNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsTabView"
        component={HomeTabView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.IV_SCAN}
        component={BarCodeScreen}
        options={{
          title: 'Scan IV Code',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.darkPrimary,
          },
          headerTitleStyle: {
            ...text,
            color: colors.white,
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default EventNavigator;
