import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import {fillFeed} from '../redux/actions';
import axiosWithAuth from '../axiosWithAuth'

import Post from '../Components/Post';


function Feed({userData, token, fillFeed, feedArray}) {
    const navigation = useNavigation();

    const renderItem = ({item}) => (<Post data={item}/>);
    useEffect(() => {
        if(!token){
            navigation.navigate('Home')
          }
          if(userData.id){
            console.log(userData)
            axiosWithAuth(token).get(`/posts/recent/${userData.id}/0`).then(res => {
              fillFeed(res.data)
              console.log(res.data)
          }).catch(err => {
            console.log({err})
          })
          }
    },[userData])
    return (
        <View>
            <FlatList
            style={styles.list}
            data={feedArray}
            renderItem = {renderItem}
            keyExtractor = {item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
  }
})

const mapStateToProps = state => ({
    userData : state.userData,
    token: state.token,
    feedArray: state.feedArray,
})

export default connect(mapStateToProps, {fillFeed})(Feed);