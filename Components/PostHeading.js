import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Image} from 'react-native';
import { useEffect } from 'react';

import axios from 'axios';
import { useState } from 'react';

function PostHeading({id, token, userData}) {
    const [posterData, serPosterData] = useState();
    useEffect(() => {
        axiosWithAuth(id).get(`/friends/${data.poster_id}`).then(res => {
            setPosterData(res.data)
        })
    }, [])
    return (
        <View>
            <Text></Text>
        </View>
    )
}

const mapStateToProps = state => ({
    userData: state.userData,
    token: state.token
})

export default connect(mapStateToProps)(PostHeading)