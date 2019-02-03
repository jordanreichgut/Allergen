import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchBar from './SearchBar.js';
import AllergyScreen from './AllergyScreen.js';
import HomeScreen from './HomeScreen.js';
import SearchScreen from './SearchScreen.js';
import ProductInfo from './ProductInfo.js';

const RootNav = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        Allergies: {screen: AllergyScreen},
        SearchScreen: {screen: SearchScreen},
        ProductInfo: {screen: ProductInfo},
    }, 
);

const AppContainer = createAppContainer(RootNav);

export default AppContainer;