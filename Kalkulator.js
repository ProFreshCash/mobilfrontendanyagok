import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

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
    if(this.state.hosszusag=="" || this.state.szelesseg=="" || this.state.magassag=="")
    {
      alert("Töltse ki a mezőket helyesen")
    }
    else{
      var eredmeny = parseInt(hosszusag)*parseInt(szelesseg)*parseInt(magassag);
      this.setState({ered: eredmeny})
    }
   
    
  }

  render() {
    return (
      <View style={{padding: 20, marginLeft:"auto", marginRight: "auto", borderRadius: 15, borderColor: "blue", borderWidth: 5, marginTop: 20, width: widthPercentageToDP(90),
      height: heightPercentageToDP(52.5)}}>
        <Text style={{fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20, textDecorationLine:"underline", textTransform:"uppercase"}}>Betonalap mennyiségének kiszámítása</Text>
        
        <View style={{width: widthPercentageToDP(70),
          height: heightPercentageToDP(21.5), marginLeft:"auto", marginRight: "auto"}}>
        
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 ,  fontSize: 20}}>
          Magasság (m): 
        </Text>
        <TextInput
      style={{height: heightPercentageToDP(6), width: widthPercentageToDP(30),borderColor: 'black', borderWidth: 3, borderRadius: 25, marginRight: "auto", textAlign:"center", fontSize: 20, }}
      onChangeText={this.magassagkezel}
      value={this.state.magassag}
        />
        </View>
        
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10, marginBottom: 5 , fontSize: 20}}>
          Szélesség (m): 
        </Text>
        <TextInput
      style={{borderColor: 'black', borderWidth: 3, borderRadius: 25, marginRight: "auto", textAlign:"center", fontSize: 20, height: heightPercentageToDP(6), width: widthPercentageToDP(30)}}
      onChangeText={this.szelessegkezel}
        />
        </View>
        
        <View style={{flex: 1, flexDirection: "row",}}>
        <Text style={{padding: 10,marginBottom: 5 , fontSize: 20}}>
          Hosszúság (m): 
        </Text>
        <TextInput
      style={{borderColor: 'black', borderWidth: 3, borderRadius: 25, marginRight: "auto", textAlign:"center",  fontSize: 20, height: heightPercentageToDP(6), width: widthPercentageToDP(30)}}
      onChangeText={this.hosszusagkezel}
        />
        </View>
        
        </View>
        
        <View style={{marginLeft:"auto", marginRight: "auto", flex: 1, flexDirection: "row",width: widthPercentageToDP(80)}}>
        <TouchableOpacity style={{marginTop: 15, fontSize: 25, backgroundColor: "blue", borderRadius: 25, padding: 10, height: heightPercentageToDP(10), width: widthPercentageToDP(40),}}
        onPress={()=> this.szamitas(this.state.magassag, this.state.szelesseg, this.state.hosszusag)}>
         <Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: 22, marginTop: 10}}> Számítás </Text>
       </TouchableOpacity>
       <Text style={{fontSize: 20, marginTop: 20, fontWeight: "bold", marginLeft: 20}}>Eredmény: </Text>
       <Text style={{fontSize: 20, marginTop: 20}}>{this.state.ered}</Text>
       <Text style={{fontSize: 20, marginLeft: 2, marginTop: 20}}>m</Text>
       <Text style={{fontSize:10, lineHeight: 20, marginTop: 20}}>3</Text>
      </View>

      </View>
    );
  }
}