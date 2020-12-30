import React, {useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    var [form, setForm] = useState({})
    const navigation = useNavigation();
    const handleRegister = () => {
        navigation.navigate('Feed')
    }
    return (
        <View style={style.form}>
                <Text style={style.header}>Sign Up</Text>
                <TextInput
                    style={style.input}
                    placeholder='User Name'
                    onChangeText={text => setForm({...form, user_name:text})}
                />
                <TextInput
                    style={style.input}
                    placeholder='First Name'
                    onChangeText={text => setForm({...form, first_name:text})}
                />
                <TextInput
                    style={style.input}
                    placeholder='Last Name'
                    onChangeText={text => setForm({...form, last_name:text})}
                />
                <TextInput
                    style={style.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={text => setForm({...form, password:text})}
                />
                <TextInput
                    style={style.input}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    onChangeText={text => setForm({...form, confirm_password:text})}
                />
                <TouchableOpacity style={style.confirm} onPress={handleRegister}><Text style={style.confirmText}>Create Account</Text></TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
    header: {
        fontSize: 30,
        color: 'white',
        marginLeft: 5,
        fontWeight: '600',
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
        
       }
})