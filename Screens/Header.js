import React from 'react';
import { Image, Text, View } from 'react-native';
import {connect} from 'react-redux';

function Header({userData}){
    return (
        <View>
            <Text></Text>
            <Image/>
        </View>
    )
}

const mapStateToProps = state => ({
    box: {

    },
    logo: {

    },
    hamburger: {

    },
    dropDown: {

    },

})

export default connect(mapStateToProps)(Header);