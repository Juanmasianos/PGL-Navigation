import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const TabsLayout = () => {
  return (
    <>

      <Tabs>
        <Tabs.Screen
          name="hobbies"
          options={{
            title: 'Home',
            tabBarIcon: () => <FontAwesome5 name="smile" color="black"></FontAwesome5>,
          }}
        />
        <Tabs.Screen
          name="qr-code"
          options={{
            title: 'QR',
            tabBarIcon: () => <FontAwesome5 name="qrcode" color="black" />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})