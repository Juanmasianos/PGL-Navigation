import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'

const AppLayout = () => {
  return (
    <View style={styles.appContainer}>
      <Drawer initialRouteName="index">
        <Drawer.Screen name="index" options={{ title: 'Bienvenida' }} />
        <Drawer.Screen name="portfolio" options={{ title: 'Portfolio' }} />
      </Drawer>
    </View>
  )
}

export default AppLayout

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
})