import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import Header from './Header';
import jwt_decoded from 'jwt-decode';
import {fillFeed, setToken} from '../redux/actions';
import axiosWithAuth from '../axiosWithAuth';
import * as SecureStore from 'expo-secure-store';

import Post from '../Components/Post';


function Feed({userData, token, fillFeed, feedArray, setToken}) {
    const navigation = useNavigation();

    const renderItem = ({item}) => (<Post data={item}/>);
    useEffect(() => {
        if(!token && !SecureStore.isAvailableAsync()){
            navigation.navigate('Home')
          }else if(!token && SecureStore.isAvailableAsync()){
            var retrievedToken = SecureStore.getItemAsync('token');
            alert(retrievedToken);
            if(!retrievedToken){
              navigation.navigate('Home');
            }else{
              console.log('setting id and token')
              setToken(retrievedToken);
              var decoded = jwt_decoded(retrievedToken);
              setId(decoded);
            }
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
            <Header/>
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

export default connect(mapStateToProps, {fillFeed, setToken})(Feed);