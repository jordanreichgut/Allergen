import React from 'react';
import { StyleSheet, Text, View , Button, ScrollView} from 'react-native';

/* Takes search term from SearchBar.js,
   constructs URL to search database,
   and returns a string array with the search results
*/
export default class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myResponse : null
    }
  }

  // CALLING THIS IN componentDidMount() DOESNT WORK

  // extractAlphaNum = (str) => {
  //   result = "";
  //   for (var i = 0; i < str.length; i++) {
  //     code = str.charCodeAt(i);
  //     if ((code > 47 && code < 58) && // numeric (0-9)
  //         (code > 64 && code < 91) && // upper alpha (A-Z)
  //         (code > 96 && code < 123)) { // lower alpha (a-z)
  //           result.concat(str[i]);
  //         }
  //   }
  //   return result;
  // }

  componentDidMount() {
    var searchTerm = "peanut butter"; // GET FROM SEARCH BAR

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
            this.setState({myResponse : encodeURIComponent(res)})
            //console.log(res)

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

            return final;

          }
        else {
          throw new Error(res)
        }
      })
  }



  render() {
    return (
        <View>
           <Text>search results screen</Text>
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