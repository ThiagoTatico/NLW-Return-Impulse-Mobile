import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  button: {
    width: 38,
    height: 38,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16
  }
});