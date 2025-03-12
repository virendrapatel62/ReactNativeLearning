import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LocationIcon = (props: any) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z" />
  </Svg>
);
export default LocationIcon;
