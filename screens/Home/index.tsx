import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import CustomButton from '../../component/CustomButton';
import CustomText from '../../component/CustomText';
import { BORDER_RADIUS, WIDTH, typography } from '../../constants/app';
import { colors } from '../../constants/color';
import CustomTask from '../../component/CustomTask';
import { data } from '../../constants/data';

const Home = () => {
  const handleOnChangeText = () => {};
  return (
    <View style={styles.container}>
      <CustomText text="Daily Task" style={styles.title} />
      <View style={styles.vInput}>
        <TextInput
          style={styles.input}
          placeholder="What is the task today?"
          keyboardType="ascii-capable"
          onChangeText={handleOnChangeText}
        />
        <CustomButton title="Add" containerStyle={styles.btnStyle} />
      </View>
      <CustomTask data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
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
    // marginLeft: 20,
  },
});

export default Home;
