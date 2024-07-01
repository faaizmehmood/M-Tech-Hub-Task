import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CounterView from '../components/counterView'
import CounterController from '../components/counterController'
import { useSelector } from 'react-redux'

const CounterScreen = () => {
    const counter = useSelector((state) => state.counter)

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}
        >
            <CounterView counterVal={counter.count} />
            <CounterController />
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({})