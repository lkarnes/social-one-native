import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../Components/Login';

export default function Home(props) {
    return (
        <View style={style.root}>
         <Text style={style.header}>Welcome to SocialOne</Text>
         <Login/>
        </View>
    )
}
const style = StyleSheet.create({
    root:{
        display: 'flex',
        alignItems:'center',
        backgroundColor:'#dee1e2',
        width: '100%',
        height: '100%',
    },
    header: {
        color:'white',
        fontWeight: 'bold',
        textAlign:'center',
        width: '100%',
        height: 45,
        backgroundColor: '#51c3c9',
        fontSize: 30,
    }
})