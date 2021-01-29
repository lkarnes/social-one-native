import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import {connect} from 'react-redux';
import Logo from '../assets/logo-3.png';
import Hamburger from '../assets/menu.png';
function Header({userData}){
    return (
        <View style={styles.box}>
            <Image style={styles.logo} source={Logo} />
            <Image style={styles.hamburger} source={Hamburger} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        zIndex: 1,
        position: 'relative',
        height: 60,
        paddingTop: 25,
        paddingBottom: 15,
        backgroundColor: '#51c3c9',
    },
    logo: {

        width: '25%',
        height: 30
    
    },
    hamburger: {
        height: 30,
        width: 30,
        marginRight: 20,
    },
    dropDown: {

    },

})

const mapStateToProps = state  => ({

})

export default connect(mapStateToProps)(Header);