import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchResults from './src/components/SearchResults';
import ProductInfo from './src/components/ProductInfo';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <SearchResults />
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
