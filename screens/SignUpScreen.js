import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MyHeader from '../components/MyHeader'
import firebase from 'firebase'
import db from '../config'

export default class SignUpScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            emailId:'',
            password:'',
            confirmPassword:''
        }
    }
    userSignup=(emailId,password,confirmPassword)=>{
        if(password!==confirmPassword){
            return Alert.alert('Password Incorrect \n Try again')
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(emailId,password)
            .then(response=>{
                return Alert.alert(
                    'Sign Up Complete!',
                    '',
                    [
                        {text:'Ok', 
                        onPress:()=>
                        this.setState({
                            'isVisible': false
                        })}
                    ]
                )
            })
            .catch(function(error){
                var errorCode=error.code
                var errorMessage=error.message
                return Alert.alert(errorMessage)
            })
        }
    }

  render(){
    return(
        
      <View style={styles.container}>
          <View>
                    <View>
                        <MyHeader title ='Sign Up'/>
                    </View>
          <View>
              <TextInput
              style ={styles.inputBox}
              placeholder='Email'
              keyboardType={'email-address'}
              onChangeText={(text)=>{
                  this.setState({
                      emailId:text
                  })
              }}
              />

              <TextInput
              style ={styles.inputBox}
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={(text)=>{
                  this.setState({
                      password:text
                  })
              }}
              />

              <TextInput
              style = {styles.inputBox}
              placeholder='Confirm Password'
              secureTextEntry={true}
              onChangeText={(text)=>{
                  this.setState({
                      confirmPassword:text
                  })
              }}
              />

              <TouchableOpacity 
              style ={styles.createAccBtn}
              onPress={()=>{
                  this.userSignup(this.state.emailId, this.state.password, this.state.confirmPassword)
                  this.props.navigation.navigate('Login')
              }}
              >
                  <Text> Create Account</Text>
              </TouchableOpacity>
             
              <View style ={{marginTop:340, marginRight:210,}}>
              <TouchableOpacity 
              style={{position:"absolute", right:20, bottom:20,  }}
              onPress={()=>{
                  this.props.navigation.navigate('Login')
              }}
              >
                  <AntDesign name="back" size={24} color="#52b3d9" /> 
                  <Text style={{color:"#52b3d9" }}>Back</Text> 
              </TouchableOpacity>
              </View>
              </View>
              </View>
          </View>
     
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e3131',
    alignItems:"center"
  },
  inputBox:{
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
  createAccBtn:{ 
    width:200,
    height:50,
    marginTop:70,
    marginLeft:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#52b3d9",
    elevation:15
  },
  /*
  bckBtn:{
    width:200,
    height:50,
    marginTop:20,
    marginLeft:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#52b3d9",
    elevation:15
  }
  */
});
