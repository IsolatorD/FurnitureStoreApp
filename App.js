import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { Home, ItemDetail } from './src/screens'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='ItemDetail'
          component={ItemDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}