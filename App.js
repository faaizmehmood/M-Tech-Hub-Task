import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CounterScreen from './src/screens/counterScreen'
import { Provider } from 'react-redux'
import { MyStore } from './src/redux/store'
import Home from './src/screens/Home'


const App = () => {
  return (
    <Provider store={MyStore}>
      {/* <CounterScreen /> */}
      <Home />
    </Provider>
  )
}

export default App