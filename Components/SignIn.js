import React, {useState} from 'react';
import {SecureStore} from 'expo';
import { StyleSheet, Text,TextInput, View, Button, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {signIn} from '../redux/actions';
import axios from 'axios';

function SignIn({signIn, userData, token}) {
    var [form, setForm] = useState({})
    const navigation = useNavigation();
    const saveToken = async(token) => {
        await SecureStore.setItemAsync('token', res.data.token);
        var token = await SecureStore.getItemAsync('token');
        console.log(token)
    }
    const handleSignIn = () => {
        axios.post('https://social-1.herokuapp.com/api/login', form).then(res => {
            signIn(res.data);
            console.log(res.data)
            saveToken(res.data.token)
            navigation.navigate('Feed'); 
        }).catch(err => {
            alert("We didnt find an account with these credentials please try again.")
            console.log({err})
        })
        
    }
    return (
        <View style={style.form}>
                <Text style={style.header}>Sign In</Text>
                <TextInput
                    style={style.input}
                    placeholder='User Name'
                    onChangeText={text => setForm({...form, username:text})}
                />
                <TextInput
                    style={style.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={text => setForm({...form, password:text})}
                />
                <TouchableOpacity style={style.confirm} onPress={handleSignIn}><Text style={style.confirmText}>Sign Into Account</Text></TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
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
              
    }
})

const mapStateToProps = state => ({
    userData: state.userData,
    token: state.token
})
export default connect(mapStateToProps, {signIn})(SignIn);