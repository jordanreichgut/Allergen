import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchBar from './searchbar.js';
import AllergyScreen from './allergy-screen.js';
import HomeScreen from './homescreen.js';

const RootNav = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        Allergies: {screen: AllergyScreen},
    }, 
);

const AppContainer = createAppContainer(RootNav);

export default AppContainer;