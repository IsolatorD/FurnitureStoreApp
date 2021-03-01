import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import { SIZES, COLORS, images, FONTS, icons } from '../constants'

const PromotionCard = () => {
  return (
    <View
      style={[
        styles.shadow,
        {
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          padding: SIZES.radius,
          height: 110,
          borderRadius: 20,
          backgroundColor: COLORS.white
        }
      ]}
    >
      <View
        style={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray2,
          borderRadius: 20
        }}
      >
        <Image
          source={images.sofa}
          resizeMode='contain'
          style={{
            width: '60%',
            height: '60%'
          }}
        />
      </View>
      
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            ...FONTS.h2
          }}
        >
          Special Offer
        </Text>
        <Text
          style={{
            ...FONTS.body3
          }}
        >
          Adding to your cart
        </Text>
      </View>

      {/* button */}
      <View
        style={{
          marginRight: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
            height: '70%',
            width: 40,
            borderRadius: 10
          }}
          onPress={() => {}}
        >
          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{
              width: '50%',
              height: '50%'
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default PromotionCard