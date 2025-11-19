import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, useRouter } from 'expo-router'

const AppLayout = () => {
  const router = useRouter();

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