import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text style={{padding: 10,marginBottom: 5 ,  fontSize: 20}}>
          Magasság(m): 
        </Text>
        <Text style={{padding: 10, marginBottom: 5 , fontSize: 20}}>
          Szélesség(m): 
        </Text>
        <Text style={{padding: 10,marginBottom: 5 , fontSize: 20}}>
          Hosszúság(m): 
        </Text>
      </View>
    );
  }
}