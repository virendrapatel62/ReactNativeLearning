import * as React from 'react';
import Svg, {Line, SvgProps} from 'react-native-svg';

// Define the props for the CloseIcon component
interface CloseIconProps extends SvgProps {
  // You can add any other props specific to the component here if needed
}

const CloseIcon: React.FC<CloseIconProps> = props => (
  <Svg
    fill="#000000"
    viewBox="0 0 24 24"
    id="cross"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}>
    <Line
      id="primary"
      x1={19}
      y1={19}
      x2={5}
      y2={5}
      style={{
        fill: 'none',
        stroke: 'rgb(0, 0, 0)',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
    <Line
      id="primary-2"
      data-name="primary"
      x1={19}
      y1={5}
      x2={5}
      y2={19}
      style={{
        fill: 'none',
        stroke: 'rgb(0, 0, 0)',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
      }}
    />
  </Svg>
);

export default CloseIcon;
