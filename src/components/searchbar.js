import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ""
    }
  }

  render() {
    const handleSearchInput = this.props.handleSearchInput;
    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{height: 50, width: 230, fontFamily: "Hiragino Sans", backgroundColor: '#fff', borderColor: 'gray', borderWidth: 1, padding: 10}}
                placeholder="Enter a food product"
                onChangeText={
                    (typedText) => {
                        this.setState({text: typedText});
                        handleSearchInput(typedText);
                    }
                }
                value={this.state.text}
                editable={true}
                maxLength={200}
            />
        </View>
    );
  }
}