import { Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacity, TextStyle } from 'react-native';
import React from 'react';
import { colors } from '../../constants/color';
import { BORDER_RADIUS } from '../../constants/app';

interface Props {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const CustomButton = (props: Props) => {
  const { title, containerStyle, onPress, titleStyle } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
  },
});

export default CustomButton;
