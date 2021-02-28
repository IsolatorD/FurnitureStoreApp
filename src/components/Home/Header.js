import React from 'react'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import {icons, SIZES} from '../../constants'

const Header = () => (
  <View
    style={{
      paddingHorizontal: SIZES.padding
    }}
  >
    <View
      style={{
        flexDirection: 'row',

      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
        }}
        onPress={()=> {}}
      >
        <Image
          source={icons.menu}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'flex-end'
        }}
        onPress={()=> {}}
      >
        <Image
          source={icons.cart}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
)

export default Header