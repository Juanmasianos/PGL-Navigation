import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type HobbyProps = {
  hobbyText: string
}

const Hobby = ({ hobbyText }: HobbyProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{hobbyText}</Text>
    </View>
  )
}

export default Hobby

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#6f11ad',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        
    }
})