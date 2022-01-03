import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  state = {
    hosszusag: '',
    magassag: '',
    szelesseg: '',
    ered: '',
 }
  magassagkezel = (text) => {
  this.setState({ magassag: text })
}
  szelessegkezel = (text) => {
  this.setState({ szelesseg: text })
}
 hosszusagkezel = (text) => {
  this.setState({ hosszusag: text })
}
  szamitas = (hosszusag, szelesseg, magassag) =>{
    var eredmeny = parseInt(hosszusag)*parseInt(szelesseg)*parseInt(magassag);
    this.setState({ered: eredmeny})
  }

  render() {
    return (
      <View style={{padding: 20, marginLeft:"auto", marginRight: "auto", borderRadius: 15, borderColor: "blue", borderWidth: 5, marginTop: 20, minWidth: 450, minHeight: 450}}>
        <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, textDecorationLine:"underline", textTransform:"uppercase"}}>Betonalap mennyiségének kiszámítása</Text>
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 ,  fontSize: 25}}>
          Magasság (m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginLeft: 15 }}
      onChangeText={this.magassagkezel}
      value={this.state.magassag}
        />
        </View>
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10, marginBottom: 5 , fontSize: 25}}>
          Szélesség (m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginLeft: 20}}
      onChangeText={this.szelessegkezel}
        />
        </View>
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 , fontSize: 25}}>
          Hosszúság (m): 
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 3, borderRadius: 25, width: 200, marginLeft: 10 }}
      onChangeText={this.hosszusagkezel}
        />
        </View>
        <TouchableOpacity style={{marginTop: 5, fontSize: 25, backgroundColor: "blue", borderRadius: 25, padding: 20,marginLeft: "auto", marginRight:"auto", width: 200}}
        onPress={()=> this.szamitas(this.state.magassag, this.state.szelesseg, this.state.hosszusag)}>
         <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 25}}> Számítás </Text>
       </TouchableOpacity>
       <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 20, marginRight:"auto", marginLeft: "auto"}}>Eredmény: {this.state.ered} Köbméter</Text>
      </View>
    );
  }
}