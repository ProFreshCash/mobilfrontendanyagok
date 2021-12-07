import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state ={ isLoading: true}
  }
    componentDidMount(){
      return fetch('http://localhost:3000/anyagok')
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
      <View style={{padding: 10,}}>
            <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{paddingBottom: 20}}>
          <Text style={{color:"black",fontSize:24,textAlign:"center",marginTop:5,marginBottom:5}}   >{item.anyag_nevesmeret}cm</Text>
          <Text style={{color:"black",fontSize:16,textAlign:"center",marginTop:5,marginBottom:5}}   >{item.anyag_mennyiseg} db</Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:5,marginBottom:5}}   >{item.anyag_ar} Ft</Text>
          <Text style={{color:"black",fontSize:30,textAlign:"center",marginTop:5,marginBottom:5}}   >{item.anyag_rendelő} </Text>
          <Image  source={{uri: 'http://localhost:3000/'+item.anyag_kep}} style={{width:200,height:200}} />  
          </View>
        
        }
        />
      </View>
    );
  }
}