import React from 'react';
import { StyleSheet, Text, View , Button, ScrollView} from 'react-native';
import AllergySelection from './AllergySelection.js'

/* Takes the selected {name, NDB} from SearchResults,
   plugs the NDB into the URL to retrieve the JSON report,
   and parses the JSON to return the ingredients list
*/
export default class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
        data: null, 
        loaded: true, 
        error: null
    }
  }

  baseURL = "https://api.nal.usda.gov/ndb/reports?format=json&";

  getData = () => {
    this.setState({loaded: false, error: null});

    var api_key = "maUyiMgir3JonvoGJrWyFI6DclaMeFFuvLvbgFMT";
    var ndbno = this.props.navigation.state.params.data.ndb;
    var url = this.baseURL + "ndbno=" + ndbno + "&api_key=" + api_key;
    var allergens = this.props.navigation.state.params.data.Allergens;  

    fetch(url)
      .then(res => {

        // Parse JSON
        var bodyText = JSON.parse(res._bodyText)
        var ingredientsString = bodyText.report.food.ing.desc;
        var ingredients = ingredientsString.split(",");

        // Format ingredients list
        for (var i = 0; i < ingredients.length; i++) {
          if (ingredients[i].includes("(")) {
            ingredients[i] = ingredients[i].split("(");
          }
          if (ingredients[i].includes(")")) {
            ingredients[i] = ingredients[i].split(")");
          }
        }

        ingredients = ingredients.flat();

        if (ingredients[ingredients.length-1] == ".") {
          ingredients.pop();
        }


        for (var i = 0; i < ingredients.length; i++) {
          
          if (ingredients[i].includes(":")) {
            var x = ingredients[i].indexOf(":") + 2;
            ingredients[i] = ingredients[i].substring(x, ingredients[i].length);
          }
          if (ingredients[i].includes("AND")) {
            ingredients[i] = ingredients[i].replace("AND", "");
          }
          if (ingredients[i].includes(".")) {
            ingredients[i] = ingredients[i].replace(".", "");
          }
          ingredients[i] = ingredients[i].trim();
        }

        // Remove duplicates
        ingredients = [...new Set(ingredients)];


        for (var i = 0; i < ingredients.length; i++) {
          console.log(ingredients[i]);
        }

        return ingredients;

      })
      .then(this.showData)
      .catch(this.badStuff)
  }


  render() {
    return (
      <View>
        <Text style={styles.txt}>This is the API call screen!</Text>
        <Button title="Get data" onPress={this.getData.bind(this)} />
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
  err:{
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  },
  txt:{
    fontSize: 24,
    color: '#333'
  }
});