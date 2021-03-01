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

import ScrollableTab from '../components/ScrollableTab'
import ScrollableCard from '../components/ScrollableCard'
import PromotionCard from '../components/PromotionCard'

import { images, icons, COLORS, FONTS, SIZES, Tabs } from '../constants/'

const Home = ({ navigation }) => {
  const [tabList, setTabList] = useState(Tabs)
  const [selectedTab, setSelectedTab] = useState(Tabs[0])

  return (
    <SafeAreaView
      style={style.container}
    >
      <Header />
      <Title text={selectedTab.title} />

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />

      <View
        style={{
          flex: 1
        }}
      >
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>

      <View
        style={{
          height: '19%',
          justifyContent: 'center'
        }}
      >
        <PromotionCard />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.padding
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