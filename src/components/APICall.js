import React from 'react';
import { StyleSheet, Text, View , Button, ScrollView} from 'react-native';

export default class APICall extends React.Component {
  constructor() {
    super();
    this.state = {
        data: null, 
        loaded: true, 
        error: null
    }
  }



  baseURL = "https://jsonplaceholder.typicode.com";


  getData = (ev)=> {
    this.setState({loaded: false, error: null});
    let url = this.baseURL + '/comments';
    let h = new Headers(); //key
    h.append('Authorization', 'Bearer fjsdaffjsdkflkslafjdsfjdfjsjf');
    h.append('X-Client', 'Steve and Friends');

    let req = new Request(url, {
      headers: h,
      method: 'GET'
    });
    

    fetch(req)
    .then(response => response.json())
    .then(this.showData)
    .catch(this.badStuff)
  }



  showData = (data) => {
    this.setState({loaded:true, data});
  }
    
  badStuff = (err) => {
    this.setState({loaded: true, error: err.message});
  }


  componentDidMount() {
    //this.getData();
    //basically the user does something first

      // fetch('http://google.com')
      //     .then(res => {
      //         if (res.ok) {
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
  }



  render() {
    return (
      <ScrollView>

        {!this.state.loaded && (<Text>LOADING</Text>)}
        <Text style = {styles.txt}>This is the API call screen!</Text>
        <Button title = "Get Data"
                onPress = {this.getData} />
        {this.state.error && (<Text style={styles.err}>{this.state.error}</Text>)}
        {this.state.data && this.state.data.length > 0 && (
         this.state.data.map(comment => (
            <Text key={comment.id} style={styles.txt}>{comment.email}</Text>
          ))
        )}
        
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