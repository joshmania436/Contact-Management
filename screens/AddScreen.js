import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase'
import db from '../config'

export default class AddScreen extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:'',
            lastname:'',
            mobileno:'',
            birthdate:'',
            address:'',

        }
    
    }
    addData=(firstname,lastname,mobileno,birthdate,address)=>{
        var user =firebase.auth().currentUser.uid
        db.collection('data').doc(user).collection('contacts').add({
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            mobileno:this.state.mobileno,
            birthdate:this.state.birthdate,
            address:this.state.address
        })
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
        this.props.navigation.navigate('Home')
    }

  render(){
    return(
      <View style ={styles.container}>
          <View>
              <TextInput
              value={this.state.firstname}
              style={styles.addContact}
              placeholder='First Name'
              onChangeText={(text)=>{
                  this.setState({
                      firstname:text
                  })
              }}
              />
                <TextInput
                value={this.state.lastname}
              style={styles.addContact}
              placeholder='Last Name'
              onChangeText={(text)=>{
                  this.setState({
                      lastname:text
                  })
              }}
              />
                <TextInput
                value={this.state.mobileno}
              style={styles.addContact}
              placeholder='Mobile Number'
              keyboardType={"number-pad"}
              onChangeText={(text)=>{
                  this.setState({
                      mobileno:text
                  })
              }}
              />
                <TextInput
                value={this.state.birthdate}
              style={styles.addContact}
              placeholder='Birth Date'
              onChangeText={(text)=>{
                  this.setState({
                      birthdate:text
                  })
              }}
              />
                <TextInput
                value={this.state.address}
              style={styles.addContact}
              multiline={true}
              placeholder='Address'
              onChangeText={(text)=>{
                  this.setState({
                      address:text
                  })
              }}
              />
              <TouchableOpacity style ={styles.sveBtn} onPress={()=>
                {
                    this.addData(this.state.firstname,this.state.lastname,this.state.mobileno,this.state.birthdate,this.state.address)
                    this.props.navigation.navigate('Home')
                }}>
                  <Text> Save </Text>
              </TouchableOpacity>

              <TouchableOpacity  
              style ={{position:"absolute", right:250, top:530,}}
              onPress={()=>{
                  this.props.navigation.navigate('Home')
              }}
              > 
               <AntDesign name="back" size={24} color="#52b3d9" /> 
                  <Text style={{color:'#52b3d9'}}> Back</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#336e7b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addContact:{
    backgroundColor:'#52b3d9',
    width:250,
    height:35,
    alignSelf:'center',
    borderColor:'#52b3d9',
    borderRadius:10,
    borderWidth:1,
    marginTop:30,
    padding:10
  },
  sveBtn:{
    width:200,
    height:50,
    marginTop:70,
    marginLeft:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#52b3d9",
    elevation:15 
  }
});
