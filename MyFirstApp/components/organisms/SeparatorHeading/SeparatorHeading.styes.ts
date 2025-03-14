import {StyleSheet} from 'react-native';
import colors from '../../atoms/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  line: {
    borderColor: colors.grayDark,
    borderTopWidth: 0.4,
    flex: 1,
    height: 1,
  },
});
