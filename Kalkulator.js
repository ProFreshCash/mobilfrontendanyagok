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
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 ,  fontSize: 20}}>
          Magasság(m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200 }}
        />
        </View>
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