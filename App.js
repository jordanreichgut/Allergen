import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/components/SearchScreen.js';
import ProductInfo from './src/components/ProductInfo.js';
import RootNav from './src/components/Navigator.js';


export default class App extends React.Component {
    render() {
        return (<RootNav />);
    }
}