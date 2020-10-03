import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emailId:'',
            password:'',
        }
    }

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          this.props.navigation.navigate('Home')
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

  render(){
    return(
      <View style ={styles.container}>
          <View>
              <Text style={{alignItems:'center',fontSize:30, color:'#2e3131', marginTop:10}}> Contact Management </Text> 
              <Image source={require('../assets/contact-management-img.png')} 
              style ={{width:300, height:150}}
              />
              <TextInput
              style ={styles.inputBox}
              placeholder={'Email'}
              keyboardType ='email-address'
              onChangeText={(text)=>{
                  this.setState({
                      emailId:text
                  })
              }}
              />
              <TextInput
              style ={styles.inputBox}
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={(text)=>{
                  this.setState({
                      password:text
                  })
              }}
              />
              <TouchableOpacity 
              style ={styles.button}
              onPress={()=>{
                  this.props.navigation.navigate('Home')
              }}
              >
                  <Text style ={styles.BTntxt}> Login </Text>
              </TouchableOpacity>

              <TouchableOpacity 
              style ={styles.button}
              onPress={()=>{
                  this.props.navigation.navigate('SignUp')
              }}
              >
                  <Text style={styles.BTntxt}> SignUp</Text>
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
  inputBox:{
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor:'#2e3131',
    fontSize: 20,
    marginBottom:20,
    marginTop:20
  },
  button:{
    width:200,
    height:50,
    marginTop:20,
    marginLeft:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#52b3d9",
    elevation:15
  },
  BTntxt:{
      fontWeight:'bold'
  }
  /*
  buttonContainer:{
    flex:1,
  },
  */
});
