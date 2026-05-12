import { StyleSheet, Text, View} from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import React from 'react'
import { styles } from '../../styles/PortfolioStyles'

const QrCodeScreen = () => {
    return (
        <View style={styles.body}>
            <View style={styles.CentrarcodigoQR}>
                <QRCode value="https://github.com/Juanmasianos" />
            </View>
        </View>
    )
}

export default QrCodeScreen