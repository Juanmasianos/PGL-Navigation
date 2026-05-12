import { StyleSheet } from 'react-native';
import Hobby from '../components/Hobby';

export const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContainer: {
        width: '100%',
    },
    firstTopRowContainer: {
        backgroundColor: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 30,
    },
    description:{
        margin: 10, 
        backgroundColor: 'lightgray', 
        padding: 10, 
        borderRadius: 10, 
        width: '65%',
    },
    descriptionTitle: { textAlign: 'center', fontWeight: '700', fontSize: 20 },
    infoButton: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    hobbyTitle: {
        color: 'black',
        fontWeight: "900",
        textTransform: 'capitalize',
        fontSize: 20,
        textAlign: 'center'
    },
    routeButton: {
        width: '50%',
    },
    body: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userImage: {
        height: 90,
        width: 90,
        borderRadius: 100
    },
    hobby: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 20,
        color: 'darkred',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16,
        backgroundColor: 'silver'
    },
    CentrarcodigoQR: {
        justifyContent: 'center',
        borderWidth: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
});