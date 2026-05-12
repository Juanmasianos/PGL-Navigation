import React from 'react'
import { Text } from 'react-native'
import { Tabs } from 'expo-router'

const PortfolioTabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Hobbies" options={{ title: 'Hobbies', headerShown: false, tabBarIcon: () => <Text>Hobbies</Text> }} />
      <Tabs.Screen name="Qr" options={{ title: 'QR', headerShown: false, tabBarIcon: () => <Text>QR</Text> }} />
    </Tabs>
  )
}

export default PortfolioTabsLayout