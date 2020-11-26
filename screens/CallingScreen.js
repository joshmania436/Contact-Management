import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import call from 'react-native-phone-call';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
    
  const [inputValue, setInputValue] = useState(' ');

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 10) {
      alert('Please insert correct 10 digit contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <SafeAreaView style={styles.container}>
         <Text style={styles.titleText}>
          Call Screen
        </Text>
      <View style={styles.container}>
             <TextInput
               style={styles.textInput}
              placeholder='Please enter or choose the number you want to call'
              keyboardType={'numeric'}
              onChangeText={
                (inputValue) => setInputValue(inputValue)
              }
              />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}>
            Call this Number
          </Text>
        </TouchableOpacity>
        <View style ={{marginTop:620, marginRight:20,}}>
              <TouchableOpacity 
              style={{position:"absolute", right:20, bottom:20,  }}
              onPress={()=>{
                  this.props.navigation.navigate('Home')
              }}
              >
                  <AntDesign name="back" size={24} color="black" /> 
                  <Text style={{color:"black" }}>Back</Text> 
              </TouchableOpacity>
              </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
    marginTop:5
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop:30
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});