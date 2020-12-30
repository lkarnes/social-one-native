import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {connect} from 'react-redux';


function Post(data) {
    console.log(data)
    return (
        <View style={styles.box}>
            <Text>{data.body}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        minHeight: 200,
        backgroundColor: 'red',
        margin: 5
    },
    body: {
        color: 'black',
    }
})

export default connect()(Post);