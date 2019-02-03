import React from 'react';
import { View, ScrollView, Text, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class AllergyScreen extends React.Component {
    static navigationOptions = {
        title: "Select Allergies",
    };
    constructor(props) {
        super(props);
        this.state = {
            cornChecked: false,
            dairyChecked: false,
            glutenChecked: false,
            wheatChecked: false,
            eggsChecked: false,
            fishChecked: false,
            shellfishChecked: false,
            peanutsChecked: false,
            treeNutsChecked: false,
            soyChecked: false,
            $trawberryChecked: false,
    
            Allergens: [],
        };

        this.handleCornPress = this.handleCornPress.bind(this);
        this.handleDairyPress = this.handleDairyPress.bind(this);
        this.handleGlutenPress = this.handleGlutenPress.bind(this);
        this.handleWheatPress = this.handleWheatPress.bind(this);
        this.handleEggsPress = this.handleEggsPress.bind(this);
        this.handleFishPress = this.handleFishPress.bind(this);
        this.handleShellfishPress = this.handleShellfishPress.bind(this);
        this.handlePeanutsPress = this.handlePeanutsPress.bind(this);
        this.handleTreeNutsPress = this.handleTreeNutsPress.bind(this);
        this.handleSoyPress = this.handleSoyPress.bind(this);
        this.handle$trawberryPress = this.handle$trawberryPress.bind(this);
    }

    remove(array, element) {
        const index = array.indexOf(element);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }

    // All handle___Press() functions are tested and working
    // Allergens are stored/removed in this.state.Allergens upon user selection

    handleCornPress() {
        this.setState({cornChecked: (this.state.cornChecked == true) ? false : true});
        this.state.Allergens.includes('Corn') ? this.remove(this.state.Allergens, 'Corn') : this.state.Allergens.push('Corn');
    }
    handleDairyPress() {
        this.setState({dairyChecked: (this.state.dairyChecked == true) ? false : true});
        this.state.Allergens.includes('Dairy') ? this.remove(this.state.Allergens, 'Dairy') : this.state.Allergens.push('Dairy');
    }
    handleGlutenPress() {
        this.setState({glutenChecked: (this.state.glutenChecked == true) ? false : true});
        this.state.Allergens.includes('Gluten') ? this.remove(this.state.Allergens, 'Gluten') : this.state.Allergens.push('Gluten');
    }
    handleWheatPress() {
        this.setState({wheatChecked: (this.state.wheatChecked == true) ? false : true});
        this.state.Allergens.includes('Wheat') ? this.remove(this.state.Allergens, 'Wheat') : this.state.Allergens.push('Wheat');
    }
    handleEggsPress() {
        this.setState({eggsChecked: (this.state.eggsChecked == true) ? false : true});
        this.state.Allergens.includes('Eggs') ? this.remove(this.state.Allergens, 'Eggs') : this.state.Allergens.push('Eggs');
    }
    handleFishPress() {
        this.setState({fishChecked: (this.state.fishChecked == true) ? false : true});
        this.state.Allergens.includes('Fish') ? this.remove(this.state.Allergens, 'Fish') : this.state.Allergens.push('Fish');
    }
    handleShellfishPress() {
        this.setState({shellfishChecked: (this.state.shellfishChecked == true) ? false : true});
        this.state.Allergens.includes('Shellfish') ? this.remove(this.state.Allergens, 'Shellfish') : this.state.Allergens.push('Shellfish');
    }
    handlePeanutsPress() {
        this.setState({peanutsChecked: (this.state.peanutsChecked == true) ? false : true});
        this.state.Allergens.includes('Peanuts') ? this.remove(this.state.Allergens, 'Peanuts') : this.state.Allergens.push('Peanuts');
    }
    handleTreeNutsPress() {
        this.setState({treeNutsChecked: (this.state.treeNutsChecked == true) ? false : true});
        this.state.Allergens.includes('Tree Nuts') ? this.remove(this.state.Allergens, 'Tree Nuts') : this.state.Allergens.push('Tree Nuts');
    }
    handleSoyPress() {
        this.setState({soyChecked: (this.state.soyChecked == true) ? false : true});
        this.state.Allergens.includes('Soy') ? this.remove(this.state.Allergens, 'Soy') : this.state.Allergens.push('Soy');
    }
    handle$trawberryPress() {
        this.setState({$trawberryChecked: (this.state.$trawberryChecked == true) ? false : true});
        this.state.Allergens.includes('$trawberries') ? this.remove(this.state.Allergens, '$trawberries') : this.state.Allergens.push('$trawberries');
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <Text onPress={this.handleCornPress} 
                      style={this.state.cornChecked ? styles.checked : styles.unchecked}>Corn</Text>
                <Text onPress={this.handleDairyPress} 
                      style={this.state.dairyChecked ? styles.checked : styles.unchecked}>Dairy</Text>
                <Text onPress={this.handleGlutenPress} 
                      style={this.state.glutenChecked ? styles.checked : styles.unchecked}>Gluten</Text>
                <Text onPress={this.handleWheatPress} 
                      style={this.state.wheatChecked ? styles.checked : styles.unchecked}>Wheat</Text>
                <Text onPress={this.handleEggsPress} 
                      style={this.state.eggsChecked ? styles.checked : styles.unchecked}>Eggs</Text>
                <Text onPress={this.handleFishPress} 
                      style={this.state.fishChecked ? styles.checked : styles.unchecked}>Fish</Text>
                <Text onPress={this.handleShellfishPress} 
                      style={this.state.shellfishChecked ? styles.checked : styles.unchecked}>Shellfish</Text>
                <Text onPress={this.handlePeanutsPress} 
                      style={this.state.peanutsChecked ? styles.checked : styles.unchecked}>Peanuts</Text>
                <Text onPress={this.handleTreeNutsPress} 
                      style={this.state.treeNutsChecked ? styles.checked : styles.unchecked}>Tree Nuts</Text>
                <Text onPress={this.handleSoyPress} 
                      style={this.state.soyChecked ? styles.checked : styles.unchecked}>Soy</Text>
                <Text onPress={this.handle$trawberryPress} 
                      style={this.state.$trawberryChecked ? styles.checked : styles.unchecked}>$trawberries</Text>
            </ScrollView>
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
    unchecked: {
        fontSize: 20,
        padding: 10,
    },
    checked: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'rgb(179, 216, 253)'
    },
});

export default AllergyScreen;