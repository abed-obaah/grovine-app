import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const BookingsIcon = ({ color }: { color: string }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 4V20H4V4H20ZM6 8H18V10H6V8ZM6 12H18V14H6V12ZM6 16H18V18H6V16Z"
      fill={color}
    />
  </Svg>
);

export default BookingsIcon;
