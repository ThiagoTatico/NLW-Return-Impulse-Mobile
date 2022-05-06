import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet'

import { styles } from './styles';
import { theme } from '../../theme';


export function Widget() {
  return (
    <>
      <TouchableOpacity 
        style={styles.button}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
    </>
  );
}