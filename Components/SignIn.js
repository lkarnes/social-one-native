import React, {useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    var [form, setForm] = useState({})
    const navigation = useNavigation();
    const handleSignIn = () => {
        navigation.navigate('Feed')
    }
    return (
        <View style={style.form}>
                <Text style={style.header}>Sign In</Text>
                <TextInput
                    style={style.input}
                    placeholder='User Name'
                    onChangeText={text => setForm({...form, user_name:text})}
                />
                <TextInput
                    style={style.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={text => setForm({...form, user_name:text})}
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