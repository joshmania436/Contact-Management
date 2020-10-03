import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {FAB} from 'react-native-paper'
import firebase from 'firebase'
import db from '../config'

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

  render(){
    return(
      <View style ={styles.container}>
              <FAB
              style ={styles.fab}
              icon ='plus'
              small
              onPress={()=>{
                  this.props.navigation.navigate('Add')
              }}
              />
              <Text style ={{alignContent:'center', marginTop:50}}> Home HomeScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fab:{
      position:"absolute",
      right:10,
      bottom:10,
      margin:20
  }
});
