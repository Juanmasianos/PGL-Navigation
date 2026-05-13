import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useAuth } from '../contexts/AuthContext'
import { colors } from '../styles/colors'

const WelcomeScreen = () => {
  const router = useRouter()
  const { user, logout, getWelcomeMessage, welcomeMessage } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(welcomeMessage)

  useEffect(() => {
    fetchWelcomeMessage()
  }, [])

  const fetchWelcomeMessage = async () => {
    try {
      setIsLoading(true)
      const message = await getWelcomeMessage()
      setDisplayMessage(message)
    } catch (error) {
      console.error('Error fetching welcome message:', error)
      setDisplayMessage('Bienvenido')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Cerrar Sesión',
          style: 'destructive',
          onPress: logout,
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.text} />
      ) : (
        <>
          <Text style={styles.welcomeTitle}>{displayMessage}</Text>
          <Text style={styles.userName}>{user?.name || 'Usuario'}</Text>
          <Image source={require('../assets/malphi.jpg')} style={styles.imagePlaceholder} />
          <Button title="Ir al portfolio" onPress={() => router.push('/portfolio' as any)} />

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    marginHorizontal: 40,
    marginVertical: 25,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    color: colors.text,
  },
  userName: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: colors.text,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
