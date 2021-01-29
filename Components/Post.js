import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import {connect} from 'react-redux';
import PostHeading from './PostHeading';

function Post({data}) {
    return (
        <View style={styles.box}> 

            <PostHeading data={data}/>
            {data.header?(<Text style={styles.header}>{data.header}</Text>):null}
            <Text style={styles.body}>{data.body}</Text>
            {data.image?<Image style={styles.image} source={{uri: data.image}}/>:null}

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '97%',
        minHeight: 120,
        backgroundColor: 'lightblue',
        marginLeft: '1.5%',
        marginTop: 8,
    },
    header: {
        fontSize: 25,
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    body: {
        fontSize: 18,
        width: '98%',
        color: '#696969',
    },
    image: {
        height: 300,
        resizeMode: 'contain'
      }
})

export default connect()(Post);