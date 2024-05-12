import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigation';
import React from 'react';
import { View } from 'react-native';
export default function App() {
  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.barStyle}></View>
      <MainNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barStyle: {
    marginBottom: 50,
  },
});
