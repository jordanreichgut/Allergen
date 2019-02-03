import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchBar from './SearchBar.js';
import AllergySelection from './AllergySelection.js';
import HomeScreen from './HomeScreen.js';
import SearchScreen from './SearchScreen.js';
import ProductInfo from './ProductInfo.js';

const RootNav = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        AllergySelection: {screen: AllergySelection},
        SearchScreen: {screen: SearchScreen},
        ProductInfo: {screen: ProductInfo},
    }, 
);

const AppContainer = createAppContainer(RootNav);

export default AppContainer;