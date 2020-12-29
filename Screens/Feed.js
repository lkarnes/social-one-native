import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {fillFeed} from '../redux/actions';


function Feed({userData, token, fillFeed}) {
    const navigation = useNavigation();
    useEffect(() => {
        if(!token){
            navigation.navigate('Home')
          }
          if(userData.id){
            axiosWithAuth().get(`/posts/recent/${userData.id}/0`).then(res => {
              fillFeed(res.data)
              console.log(res.data)
          }).catch(err => {
            console.log({err})
          })
          }
    },[userData])
    return (
        <View>
            
        </View>
    )
}

const mapStateToProps = state => ({
    userData : state.userData,
    token: state.token,
    feedArray: state.feedArray,
})

export default connect(mapStateToProps, {fillFeed})(Feed);