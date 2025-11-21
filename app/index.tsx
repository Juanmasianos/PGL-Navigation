import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const AppScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Text>index</Text>
      <Button title="¡Navegar a hobbies!" onPress={() => { router.navigate('/hobbies') }} ></Button>
    </View>
  )
}

export default AppScreen

const styles = StyleSheet.create({})
