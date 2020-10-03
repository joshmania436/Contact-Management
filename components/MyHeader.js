import * as React from 'react'
import {Header, Icon} from 'react-native-elements'
import {Text, View, StyleSheet} from 'react-native'

const MyHeader =props =>{
    return(
        <Header
        centerComponent={{text:props.title, style:{color:'white'}}}
        backgroundColor='#52b3d9'
        />
    )
}
export default MyHeader ;