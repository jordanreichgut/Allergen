import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import SearchBar from './searchbar.js';
import {ImageBackground} from 'react-native';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Allergen Home",
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground
            source = {{uri:'https://images.template.net/wp-content/uploads/2016/02/05120041/Food-Salad-Instagram-Hunger-City-Life-Flare-iPhone6-Background.jpg'}}
            style = {{width: 400, height: 800}}>
                <View style={styles.container}>
                    <SearchBar />
                    <Button
                        onPress={ () => navigate("Allergies") }
                        title="Select Allergies..."
                        color="#fff"/>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default HomeScreen;