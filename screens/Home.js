import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
