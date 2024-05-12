import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

const Login = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const setData = async () => {};
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(value) => setName(value)}
        />
        <TextInput style={styles.input} placeholder="Age" onChangeText={(value) => setAge(value)} />
        <View style={styles.form}>
          <TouchableOpacity onPress={setData} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    margin: 30,
    // flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    // backgroundColor: '#00ffff',
    alignItems: 'center',
  },
  Text: {
    fontSize: 20,
  },
  image: {
    flex: 1,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default Login;
