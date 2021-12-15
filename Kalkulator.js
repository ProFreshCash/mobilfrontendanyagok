import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  szamitas = () =>{
    var a;
    var b;
    var c;
    var eredmeny = a*b*c;
  }

  render() {
    return (
      <View style={{padding: 20, marginLeft:"auto", marginRight: "auto", borderRadius: 15, borderColor: "blue", borderWidth: 5, marginTop: 20, minWidth: 400, minHeight: 400}}>
        <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, textDecorationLine:"underline", textTransform:"uppercase"}}>Betonalap mennyiségének kiszámítása</Text>
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 ,  fontSize: 25}}>
          Magasság (m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginLeft: 15 }}
        />
        </View>
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10, marginBottom: 5 , fontSize: 25}}>
          Szélesség (m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginLeft: 20}}
        />
        </View>
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 , fontSize: 25}}>
          Hosszúság (m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginLeft: 10 }}
        />
        </View>
        <TouchableOpacity style={{marginTop: 5, fontSize: 25, backgroundColor: "blue", borderRadius: 25, padding: 20, marginLeft: 150, width: 200}}
        onPress={()=> szamitas(this)}>
         <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 25}}> Számítás </Text>
       </TouchableOpacity>
      </View>
    );
  }
}