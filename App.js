import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchResults from './src/components/SearchResults';
import ProductInfo from './src/components/ProductInfo';
import RootNav from './src/components/navigator.js';


export default class App extends React.Component {
    render() {
        return (<RootNav />);
    }
}