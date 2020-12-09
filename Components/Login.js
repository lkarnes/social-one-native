import React, {useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableOpacity } from 'react-native';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Login(){
    const [signUp, setSignUp] = useState(true)

    return (
        <View style={style.root}>
            {signUp?<SignUp />: <SignIn />}
            <Button onPress={()=>setSignUp(!signUp)} title={signUp?'Sign In': 'Sign Up'}/>
        </View>

    )
}
const style = StyleSheet.create({
    root:{
        marginTop: 20,
        width: '95%',
        backgroundColor: '#96ccd4',
        borderRadius: 5,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    switch: {
        
    }
    
})