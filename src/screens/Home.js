import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native'

// Components
import Header from '../components/Home/Header'
import Title from '../components/Home/Title'

import { images, icons, COLORS, FONTS, SIZES } from '../constants/'

const Home = () => {
  const [tabList, setTabList] = useState([])
  return (
    <SafeAreaView
      style={style.container}
    >
      <Header />
      <Title text='Test title' />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9
  }
})

export default Home