import { View, StyleProp, TextStyle } from 'react-native';
import { Text, ViewStyle, StyleSheet } from 'react-native';
import { colors } from '../../constants/color';

interface Props {
  text?: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

const CustomText = (props: Props) => {
  const { text = '', style, numberOfLines = 0, containerStyle = {}, onPress } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[styles.title, style]}
        allowFontScaling={false}
        numberOfLines={numberOfLines}
        onPress={onPress}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flexWrap: 'wrap',
    color: colors.text,
  },
});

export default CustomText;
