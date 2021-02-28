import React from 'react'
import {
  View,
  Text
} from 'react-native'

import {FONTS, SIZES, COLORS} from '../../constants/'

const Title = ({ text }) => (
  <View
    style={{
      marginTop: SIZES.padding,
      marginHorizontal: SIZES.padding
    }}
  >
    <Text
      style={{
        color: COLORS.black,
        ...FONTS.largeTitle
      }}
    >
      Collection of
    </Text>
    <Text
      style={{
        color: COLORS.black,
        ...FONTS.largeTitle
      }}
    >
      {text}
    </Text>
  </View>
)

export default Title