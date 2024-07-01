import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Platform } from 'react-native'

const CustomCounterSet = ({ setValue }) => {
    const [number, setNumber] = useState('0')
    const handleInput = (text) => {
        setNumber(text)
        setValue(text)
    }
    return (
        <View style={{
            flex: 1, width: '100%',
        }}
        >
            <TextInput value={number} onChangeText={handleInput} placeholder='Enter Number' keyboardType='phone-pad' style={{ borderWidth: 2, borderColor: '#000', padding: 10, margin: 10, }} />
        </View>
    )
}

export default CustomCounterSet

const styles = StyleSheet.create({})