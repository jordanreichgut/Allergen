import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Button} from 'react-native';
 
function adjusted(names) {
  let len = names.length;
  for (let i = 0; i < len; i++){
    if(names[i].length > 40){
      names[i] = (names[i].substring(0,36)+"...");
    } 
  }
  return names;
}

class SearchScreen extends Component {
  constructor() {
    super();
    
    this.state = {
      selected: '',
      items: [
        'Goa',
        'Gujrat',
        'Madhya Pradesh',
        'Assam',
        'Gujrat',
        'Karnataka',
        'Jharkhand',
        'Himachal Pradeshaaaaaaaaaaaaaaaaaaaaaaaakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Uttarakhand',
        'West Bengal',
        'Tamil Nadu ',
        'Punjab',
        'Rajasthan',
        'Bihar',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
      ]
    };
  }

  //<Text onPress={this.handleSelectedPress}
  //style = {this.state.selectedChecked ? styles.checked: styles.unchecked}>{item}</Text>
  //<View style={styles.separator} />
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        {adjusted(this.state.items).map((item, key) => (
          <View key={key} style={styles.button}>
            <Button 
              onPress={ 
                () => {this.setState({selected: {item}})
                navigate("Home")}
              }
              title = {item}
              className = "text-left"/>
          </View>
        ))}
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  button: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default SearchScreen;