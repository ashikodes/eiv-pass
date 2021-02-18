import React from 'react';
import { Text } from 'react-native';

import { fontFamily } from '../config/styles';

function AppText({ style, children }) {
  const { fontWeight = 500, ...rest } = style;
  return (
    <Text style={[{ fontFamily: fontFamily[fontWeight] }, rest]}>
      {children}
    </Text>
  );
}

export default AppText;
