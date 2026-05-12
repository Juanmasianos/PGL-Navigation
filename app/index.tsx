import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const WelcomeScreen = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Bienvenida</Text>
      <Image source={require('../assets/malphi.jpg')} style={styles.imagePlaceholder} />
      <Button title="Ir al portfolio" onPress={() => router.push('/portfolio' as any)} />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePlaceholder: {
    marginHorizontal: 40,
    marginVertical: 25,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
})
