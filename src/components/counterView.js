import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounterView = ({ counterVal }) => {

    return (
        <View style={{ alignSelf: 'center' }}>
            <Text style={{ color: '#000', fontSize: 45, fontWeight: 'bold' }}>{counterVal}</Text>
        </View>
    )
}

export default CounterView
const styles = StyleSheet.create({})