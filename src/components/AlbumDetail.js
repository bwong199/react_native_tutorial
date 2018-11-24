import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Card from './Card'
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text >{props.album.title}</Text>
            </CardSection>
        </Card>
    )
}


export default AlbumDetail;