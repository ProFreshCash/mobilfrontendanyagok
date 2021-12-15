
import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state ={ isLoading: true}
  }
    componentDidMount(){
      return fetch('http://192.168.1.107:3000/anyagok')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });

  }


  render() {
    return (
      <View style={{padding: 10, marginLeft: "auto", marginRight: "auto",}}>
            <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{paddingBottom: 20, width: 500,}}>
           <View style={{flex: 1, flexDirection: 'row', borderColor: "black", borderWidth: 3, borderRadius: 15, padding: 10, }}>
        <View style={{flex: 1, width: 400,height: 300, marginLeft: "auto", marginRight: "auto"}} >


        <Text style={{color:"black",fontSize:24,textAlign:"center",marginTop:5,marginBottom:5}}   >Neve és mérete: {item.anyag_nevesmeret}cm</Text>
        <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:5,marginBottom:5}}   >Mennyiség: {item.anyag_mennyiseg} db</Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:5,marginBottom:5}}   >Ár: {item.anyag_ar} Ft</Text>
          <Text style={{color:"black",fontSize:30,textAlign:"center",marginTop:5,marginBottom:5}}   >Rendelő: {item.anyag_rendelő} </Text>

         </View>

        <View style={{flex: 1,marginLeft: 5}}>
        <Image  source={{uri: 'http://192.168.1.107:3000/'+item.anyag_kep}} style={{width:230,height:230}} />
          </View>        
      </View>
  </View>
        }
        />
      </View>
    );
  }
}