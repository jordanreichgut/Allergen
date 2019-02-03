import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SearchBar from './searchbar.js';
import Expo from 'expo';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Allergen Home",
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <SearchBar />
                <Button
                    onPress={ () => navigate("Allergies") }
                    title="Select Allergies..."
                />
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

export default HomeScreen;