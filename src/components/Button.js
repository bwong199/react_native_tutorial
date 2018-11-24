import { Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Card from './Card'

const Button = ({onPress, children}) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
} 

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderCoor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;