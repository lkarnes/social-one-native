import { auto } from 'async';
import React, {useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableOpacity } from 'react-native';
const SignUp = () => {
    return (
        <View style={style.form}>
                <Text style={style.header}>Sign Up</Text>
                <TextInput
                    style={style.input}
                    placeholder='User Name'/>
                <TextInput
                    style={style.input}
                    placeholder='First Name'/>
                <TextInput
                    style={style.input}
                    placeholder='Last Name'/>
                <TextInput
                    style={style.input}
                    placeholder='Password'/>
                <TextInput
                    style={style.input}
                    placeholder='Confirm Password'/>
                <TouchableOpacity style={style.confirm}><Text style={style.confirmText}>Create Account</Text></TouchableOpacity>
            </View>
    )
}
const SignIn = () => {
    return (
        <View style={style.form}>
                <Text style={style.header}>Sign In</Text>
                <TextInput
                    style={style.input}
                    placeholder='User Name'/>
                <TextInput
                    style={style.input}
                    placeholder='First Name'/>
                <TextInput
                    style={style.input}
                    placeholder='Last Name'/>
                <TextInput
                    style={style.input}
                    placeholder='Password'/>
                <TextInput
                    style={style.input}
                    placeholder='Confirm Password'/>
                <TouchableOpacity style={style.confirm}><Text style={style.confirmText}>Sign Into Account</Text></TouchableOpacity>
            </View>
    )
}
export default function Login(){
    const [signUp, setSignUp] = useState(true)
    return (
        <View style={style.root}>
            {signUp?<SignUp/>: <SignIn/>}
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
    form: {
        width: '95%',
        marginVertical: 20,
    },
    input: {
        fontSize: 20,
        width: '100%',
        backgroundColor: '#ececec',
        color: '#525252',
        margin: 8,
    },
    confirm: {
       backgroundColor: '#86f188',
       width: '60%', 
       alignSelf: 'center',
    },
    confirmText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        
       },
    switch: {
        
    }
    
})