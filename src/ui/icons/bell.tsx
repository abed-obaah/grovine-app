import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BellIcon = ({ color = 'black', size = 24 }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <Path d="M18 16v-6a6 6 0 0 0-12 0v6M6 18h12a2 2 0 0 0 2-2H4a2 2 0 0 0 2 2z" />
  </Svg>
);

export default BellIcon;
