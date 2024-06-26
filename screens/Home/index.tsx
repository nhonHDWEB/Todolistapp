import { View, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../component/CustomButton';
import CustomText from '../../component/CustomText';
import { HEIGHT, WIDTH } from '../../constants/app';
import { colors } from '../../constants/color';
import CustomTask from '../../component/CustomTask';
import useGlobalStore from '../../zustand';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import { TaskType } from '../../utils/type';

const Home = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { addTask, editTask, numberOfTaskFinished, numberTask, getFilterTask } = useGlobalStore();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [taskValue, setTaskValue] = useState<TaskType>({
    id: '',
    title: '',
    isFinished: false,
  });
  const filterTask = getFilterTask(searchQuery);

  const handleOnChangeText = (text: string) => {
    setInputValue(text);
  };

  const handleAddTask = () => {
    if (inputValue !== '') {
      addTask(inputValue);
    }
    setInputValue('');
  };

  const handleEditTask = (item: TaskType) => {
    setIsShowModal(true);
    setTaskValue(item);
  };

  const handleUpdate = () => {
    editTask(taskValue);
    setIsShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomText text="Search" style={styles.txtSearch} />
        <TextInput
          value={searchQuery}
          style={styles.inputSearch}
          placeholder="Search"
          keyboardType="ascii-capable"
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <View style={styles.vHeader}>
        <CustomText text="Daily Task" style={styles.title} />
        <CustomText text={`${numberOfTaskFinished()}/${numberTask()}`} style={styles.title} />
      </View>
      <View style={styles.vInput}>
        <TextInput
          value={inputValue}
          style={styles.input}
          placeholder="What is the task today?"
          keyboardType="ascii-capable"
          onChangeText={handleOnChangeText}
        />
        <CustomButton title="Add" onPress={handleAddTask} />
      </View>
      <CustomTask data={filterTask} onEditTask={handleEditTask} />
      <Modal isVisible={isShowModal} style={styles.modal}>
        <View style={styles.vModalStyle}>
          <Icon name="close" size={20} onPress={() => setIsShowModal(false)} style={styles.icon} />
          <TextInput
            value={taskValue.title}
            style={styles.inputTask}
            keyboardType="ascii-capable"
            onChangeText={(text) => setTaskValue({ ...taskValue, title: text })}
          />
          <CustomButton title="Update" containerStyle={styles.btnStyle} onPress={handleUpdate} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  vHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtSearch: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputSearch: {
    width: WIDTH * 0.9,
    height: 30,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 8,
    paddingLeft: 10,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  vInput: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  input: {
    width: WIDTH * 0.7,
    height: 50,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 15,
    paddingLeft: 10,
  },
  btnStyle: {
    width: WIDTH * 0.8,
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vModalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.9,
    height: HEIGHT * 0.25,
    backgroundColor: colors.white,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  icon: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  inputTask: {
    width: WIDTH * 0.8,
    height: 50,
    borderWidth: 1,
    borderColor: colors.darkgray,
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 30,
  },
});

export default Home;
