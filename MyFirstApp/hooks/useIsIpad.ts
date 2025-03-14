import {useWindowDimensions} from 'react-native';

const useIsIpad = () => {
  const {width} = useWindowDimensions();
  return width > 600;
};

export default useIsIpad;
