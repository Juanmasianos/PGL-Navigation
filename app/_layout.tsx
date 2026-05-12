import React from 'react'
import { Drawer } from 'expo-router/drawer'

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="bienvenida" 
        options={{
          drawerLabel: 'Bienvenida',
          title: 'Bienvenida',
        }}
      />
      <Drawer.Screen
        name="portfolio" 
        options={{
          drawerLabel: 'Portfolio',
          title: 'Portfolio',
        }}
      />
    </Drawer>
  )
}