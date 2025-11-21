import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const AppLayout = () => {

  return (
    <View style={styles.appContainer}>
      <Slot />
    </View>
  )
}

export default AppLayout

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})