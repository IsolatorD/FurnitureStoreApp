import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const ItemDetail = () => {
  return (
    <View
      style={style.container}
    >
      <Text>ItemDetail screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ItemDetail