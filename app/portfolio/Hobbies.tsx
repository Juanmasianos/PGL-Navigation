import { StyleSheet, Text, View, Pressable, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../../styles/PortfolioStyles'
import { hobbies } from '../../data/hobbiesData'
import Hobby from '../../components/Hobby'

const HobbiesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.firstTopRowContainer}>My Portfolio App</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.userImage} source={require('../../assets/necraman.png')} />
                        <View style={styles.description}>
                            <Text style={styles.descriptionTitle}>
                                Descripción sobre mí:
                            </Text>
                            <Text>
                                Pues no se que poner aquí, pero me gusta la programación supongo...
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.hobbyTitle}>
                        cosas que me gustan mucho:
                    </Text>
                    <ScrollView >
                        {hobbies.map((hobby, index) => (
                            <Hobby key={index} hobbyText={hobby} />
                        ))}
                    </ScrollView>
                </View>
            </View>

        </View>
    )
}

export default HobbiesScreen

