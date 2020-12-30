import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {connect} from 'react-redux';


function Post({data}) {
    return (
        <View style={styles.box}>
            <Text style={styles.body}>{data.body}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    box: {
        width: '90%',
        minHeight: 200,
        backgroundColor: 'lightblue',
        margin: 5,
    },
    body: {
        color: 'black',
    }
})

export default connect()(Post);