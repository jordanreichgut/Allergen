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
            source = {{uri:'https://i.pinimg.com/originals/60/fb/ee/60fbeed6efc901bbc0d8aef587f971f9.jpg?fbclid=IwAR2AI6I89IX5tgRXm_NHdU38y9-nLgoc9deCL8J7eSzpmaVMgprvD7hYNgw'}}
            style = {{width: 400, height: 800}}>
                <View style={styles.container}>
                    <SearchBar />
                    <Button
                        onPress={ () => navigate("SearchScreen")}
                        title="Go"
                        color="#fff"/>
                </View>
                <View style={styles.container}>
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
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default HomeScreen;