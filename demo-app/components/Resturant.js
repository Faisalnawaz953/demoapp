import React from 'react'
import { View, Text } from 'react-native'

export default function Resturant(props) {
    
    return (
        <View>
            <Text>{props.route.params.resturant}</Text>
        </View>
    )
}
