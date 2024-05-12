import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import Icon from 'react-native-vector-icons/AntDesign';
import { CheckBox } from '@rneui/themed';
import { colors } from '../../constants/color';
import { typography } from '../../constants/app';
import { TaskType } from '../../utils/type';
import useGlobalStore from '../../zustand/index';

interface Props {
  data?: TaskType;
  onEditTask?: (item: TaskType) => void;
}

const CustomTask = (props: Props) => {
  const { data, onEditTask } = props;
  const { deleteTask, markDoneTask } = useGlobalStore();

  const handleDeleteTask = (id: string) => {
    Alert.alert('Warning!', 'Are you want to delete task', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => deleteTask(id) },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.vTask} key={item.id}>
        <View style={styles.vLeft}>
          <CheckBox
            checked={item.isFinished}
            onPress={() => markDoneTask(item.id)}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="green"
          />
          <TouchableOpacity onPress={() => onEditTask && onEditTask(item)} activeOpacity={0.5}>
            <CustomText
              text={item.title}
              style={item.isFinished ? styles.titleUnderline : styles.title}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
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
    marginTop: 20,
  },
});

export default CustomTask;
