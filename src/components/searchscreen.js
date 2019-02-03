import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Button} from 'react-native';
import AllergySelection from './AllergySelection.js';
 
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
      items: []
    };
  }


  componentDidMount() {
    var searchTerm = this.props.navigation.state.params.data.searchTerm;
    console.log(searchTerm);

    // Construct URL for database query from user's search entry
    var splitSearch = searchTerm.split(" ");
    var urlPart1 = "https://ndb.nal.usda.gov/ndb/search/list?fgcd=&manu=&lfacet=&count=&max=50&sort=default&qlookup=";
    var urlPart2 = "&offset=&format=Full&new=&measureby=&ds=&order=asc&qt=&qp=&qa=&qn=&q=&ing="
    var urlSearch = "";
    for (var i = 0; i < splitSearch.length-1; i++) {
      urlSearch += splitSearch[i] + "+";
    }
    urlSearch += splitSearch[splitSearch.length-1];
    var url = urlPart1 + urlSearch + urlPart2;

    fetch(url)
       .then(res => {
          if (res.ok) {
            var str = JSON.stringify(res);
            var arr = str.split('reports for this food');
            var names = [];
            var ndbs = [];
            var final = [];

            // Populate names array with names
            for (var i = 0; i < arr.length; i += 2) {
              var j = arr[i].indexOf("<");
              element = arr[i].substring(10, j-10);
              trimmed = element.trim();

              // NOTE: special characters (&amp) aren't formatted

              names.push(trimmed);
            }

            names.shift(); // Remove garbage element

            // Populate ndbs array with NDBs
            for (var i = 1; i < arr.length; i += 2) {
              var j = arr[i].indexOf("<");
              element = arr[i].substring(10, j);
              trimmed = element.trim();
              ndbs.push(trimmed);
            }
            
            // Populate final with combined name/ndb objects
            for (var i = 0; i < names.length; i++) {
              final.push({"name": names[i], "ndb": ndbs[i]})
            }

            console.log("FINAL ARRAY: ");
            for (var i = 0; i < final.length; i++) {
              console.log(final[i]);
            }

            this.setState({items: final});
            return final;

          }
        else {
          throw new Error(res)
        }
      })
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
                navigate("AllergySelection", {data: {ndb: item.ndb}})}
              }
              title = {item.name}
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