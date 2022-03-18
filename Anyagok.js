
import React, { Component } from 'react';
import { Text, View, FlatList, Image,Modal,StyleSheet,TouchableOpacity  } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
//import { TouchableHighlight } from 'react-native-gesture-handler';

const CONFIG = require('./config.js');

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state ={ isLoading: true, isVisible:false,anyag:[]}
  }
    componentDidMount(){
      return fetch('http://'+CONFIG.IP+':'+CONFIG.PORT+'/anyagok')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson,
            anyag: [],
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });

  }

  displayModal(show){
    this.setState({isVisible: show})
  }
   

  render() {
    return (
      <View style={{padding: 10, marginLeft: "auto", marginRight: "auto",}}>

          <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
             // Alert.alert('Modal has now been closed.');
            }}>
          <View style = {styles.modal} /* Modal Törzse */>

          
          <View style={{minWidth:300, marginLeft:"auto", marginRight:"auto", borderColor:"black",borderRadius:25,borderWidth: 2, padding: 10}}>
          <Text style={{color:"black",fontSize:16,textAlign:"left",marginTop:5,marginBottom:5}}   >{this.state.anyag.anyag_leiras} </Text>
      </View>
          </View>

          <View style = {styles.container2}>
              <Text //Bezáró Gomb
                style={styles.closeText}
                onPress={() => {
                  this.displayModal(!this.state.isVisible);}}>Bezárás
              </Text>
            </View>
          </Modal>


      <View style={{width: widthPercentageToDP(80),
          height: heightPercentageToDP(100)}}>
          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

        <View style={{marginBottom: 15}}>
        <View style={{flexDirection: 'row', borderColor: "black", borderWidth: 3, borderRadius: 15, padding: 10}}>
        <View style={{flex: 1, marginLeft: "auto", marginRight: "auto"}} >


        <Text style={{color:"black",fontSize:18,textAlign:"center",marginTop:5,marginBottom:5}}   >Anyag neve: {item.anyag_neve}</Text>
          <Text style={{color:"black",fontSize:16,textAlign:"center",marginTop:5,marginBottom:5}}   >Anyag mérete: {item.anyag_merete}</Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:5,marginBottom:5}}   >Anyag ára: {item.anyag_ar} Ft</Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:5,marginBottom:5}}   >Anyag fajtája: {item.anyag_fajtaja} </Text>
         </View>

        <View style={{flex: 1,marginLeft: 5, marginTop: 25}}>
        <TouchableOpacity  onPress={() => { this.displayModal(true); this.setState({anyag:item})}}>
        <Image style={{ width: 125, height: 125, marginLeft: 10}}
                 source={{uri: 'http://'+CONFIG.IP+':'+CONFIG.PORT+'/'+item.anyag_kep}}
                 resizeMode="contain"/>
        </TouchableOpacity >
        </View>        
      </View>
  </View>
        }
        />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0fb0fb',
    shadowColor: '#fff',
    shadowOpacity: 0.5,
    padding:20,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    marginTop:'auto',
  },
  container2: {
    fontSize: 24,
    color: '#00479e',
    marginTop:'auto',
    alignSelf:'center',
    marginBottom:50,
  },
  cim: {
    fontWeight:"bold",
    textAlign:"center",
    fontSize:25
  },
  modal: {
    fontSize: 24,
    color: '#00479e',
    marginTop:100,
    textAlign: 'center',
  }
});