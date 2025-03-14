import * as React from 'react';
import Svg, {Rect, G, Path} from 'react-native-svg';
const Dropdown = (props: any) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0} fill="none" width={24} height={24} />
    <G>
      <Path d="M7 10l5 5 5-5" />
    </G>
  </Svg>
);
export default Dropdown;
