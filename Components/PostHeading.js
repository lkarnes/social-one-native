import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Image} from 'react-native';
import { useEffect } from 'react';

import axiosWithAuth from '../axiosWithAuth';
import { useState } from 'react';

function PostHeading({data, token, userData}) {
    const [posterData, setPosterData] = useState();
    useEffect(() => {
        axiosWithAuth(token).get(`/friends/${data.poster_id}`).then(res => {
            setPosterData(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <>
        {posterData?
            <View style={styles.box}>
                <Image style={styles.logo} source={{uri:posterData.image}}/>
                <Text style={styles.username}>{posterData.username}</Text> 
            </View>
        :
        <View style={styles.box}></View>
        }
        </>
        
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
    token: state.token
})

const styles = StyleSheet.create({
    box: {
        width: '100%',
        backgroundColor: 'grey',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 18,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 50,
        margin: 2,
    },
})

export default connect(mapStateToProps)(PostHeading)