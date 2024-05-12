import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import { CheckBox } from '@rneui/themed';
import { colors } from '../../constants/color';
import { typography } from '../../constants/app';

interface Props {
  data?: any;
}

const CustomTask = (props: Props) => {
  const { data } = props;
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const handleDeleteTask = () => {
    Alert.alert('Warning!', 'Are you want to delete task', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.vTask}>
        <View style={styles.vLeft}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="green"
          />
          <TouchableOpacity onPress={() => console.log('sss')} activeOpacity={0.5}>
            <CustomText text={item.title} style={checked ? styles.titleUnderline : styles.title} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleDeleteTask}>
          <Icon name="delete" size={15} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  vTask: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
    borderColor: colors.text,
    borderTopWidth: 1,
  },
  vLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontSize: typography.fontSize.medium,
  },
  titleUnderline: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontSize: typography.fontSize.medium,
    textDecorationLine: 'line-through',
  },
  contentContainerStyle: {
    // borderColor: colors.text,
    // borderBottomWidth: 1,
    marginTop: 20,
  },
});

export default CustomTask;
