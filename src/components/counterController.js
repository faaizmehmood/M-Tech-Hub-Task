import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInputVal, increment_decrement_Val } from '../redux/Actions/Counter/CounterAction';

const CounterController = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const [count, setCount] = useState(counter.changeValue)

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginTop: '5%', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'blue', padding: 6 }} onPress={() => {
                        dispatch(increment_decrement_Val("decrement"))
                        setCount('')
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#ffff',
                        }}>Decrement</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: 'blue', padding: 6 }} onPress={() => {
                        dispatch(increment_decrement_Val("increment"))
                        setCount('')
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#ffff',
                        }}>Increment</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{ marginTop: '10%' }}
            >
                <TextInput
                    onChangeText={(text) => {
                        setCount(text)
                        dispatch(changeInputVal(text));
                    }}
                    value={count}
                    placeholder='Enter Number' keyboardType='phone-pad' style={{ borderWidth: 2, borderColor: '#000', padding: 10, margin: 18, }} />
            </View>

        </View>
    )
}

export default CounterController
