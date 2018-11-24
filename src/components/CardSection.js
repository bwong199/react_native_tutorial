import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Card from './Card'

const CardSection = (props) => {
    return (
            <Text style={styles.containerStyle}>
                {props.children}            
            </Text>
    )
} 

const styles = {
    containerStyle: {
        borderBottomWidth: 1, 
        padding: 5, 
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}


export default CardSection;