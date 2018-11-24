import { Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Card from './Card'

const Button = (props) => {
    return (
        <TouchableOpacity>
            <Text>Click Me!</Text>
        </TouchableOpacity>
    )
} 

export default Button;