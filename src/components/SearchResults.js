import React from 'react';
import { StyleSheet, Text, View , Button, ScrollView} from 'react-native';

export default class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myResponse : null
    }
  }

  componentDidMount() {
    fetch('http://google.com')
       .then(res => {
          if (res.ok) {
            //this.setState({res : JSON.stringify(res.json())})
            this.setState({myResponse : encodeURIComponent(res)})
            console.log(res)
            return res.json()
          }
          else {
            throw new Error(res)
          }
      })
      .then(json => {
         for (var key in json) {
           // now you can parse it by calling json[key]
           console.log(json[key])
         }})
       .catch(error => console.log(error))
  }


  // componentDidMount() {
  //   let searchTerm = "peanut butter"; // GET FROM SEARCH BAR
  //   let splitSearch = searchTerm.split(" ");
  //   let urlPart1 = "https://ndb.nal.usda.gov/ndb/search/list?fgcd=&manu=&lfacet=&count=&max=50&sort=default&qlookup=";
  //   let urlPart2 = "&offset=&format=Full&new=&measureby=&ds=&order=asc&qt=&qp=&qa=&qn=&q=&ing="
  //   let urlSearch = "";
  //   for (var i = 0; i < splitSearch.length-1; i++) {
  //     urlSearch += splitSearch[i] + "+";
  //   }
  //   urlSearch += splitSearch[splitSearch.length-1];

  //   let url = urlPart1 + urlSearch + urlPart2;

  //   fetch(url)
  //     .then(res => {
  //         if (res.ok) {
  //           console.log("\n\n\n" + res + "\n\n\n")
  //             //this.setState({res : JSON.stringify(res.json())})
  //             this.setState({myResponse : encodeURIComponent(res)})
  //             console.log(encodeURIComponent(res))
  //             return res.json()
  //         }
  //         else {
  //             throw new Error(res)
  //         }
  //     })
  //     .then(json => {
  //       for (var key in json) {
  //         // now you can parse it by calling json[key]
  //         console.log(json[key])
  //       }})
  //     .catch(error => console.log(error))
  //   }

  // constructor() {
  //   super();
  //   this.state = {
  //       data: null, 
  //       loaded: true, 
  //       error: null
  //   }
  // }



//   baseURL = "https://api.nal.usda.gov/ndb/reports?format=json&";


//   getData = (ev)=> {
//     this.setState({loaded: false, error: null});

//     let api_key = "maUyiMgir3JonvoGJrWyFI6DclaMeFFuvLvbgFMT";
//     let ndbno = "45015542"; // CHANGE LATER
//     let url = this.baseURL + ndbno + "&api_key=" + api_key;



//     // UNFINISHED!!!!!!!!!!!


//     let req = new Request(url, {
//       headers: h,
//       method: 'GET'
//     });
    

//     fetch(req)
//     .then(response => response.json())
//     .then(this.showData)
//     .catch(this.badStuff)
//   }



//   showData = (data) => {
//     this.setState({loaded:true, data});
//   }
    
//   badStuff = (err) => {
//     this.setState({loaded: true, error: err.message});
//   }


  



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