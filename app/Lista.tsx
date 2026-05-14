import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '../styles/colors';
import Videojuego from '../components/Videojuego';
import ModalAgregarVideojuego from '../components/ModalAgregarVideojuego';
import { videojuegosIniciales, Videojuego as VideojuegoType } from '../data/videojuegosData';
import { useState } from 'react';

export default function App() {
  const [videojuegos, setVideojuegos] = useState<VideojuegoType[]>(videojuegosIniciales);
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleJugado = (id: string) => {
    setVideojuegos((prevVideojuegos) =>
      prevVideojuegos.map((v) =>
        v.id === id ? { ...v, jugado: !v.jugado } : v
      )
    );
  };

  const handleEliminar = (id: string) => {
    setVideojuegos((prevVideojuegos) =>
      prevVideojuegos.filter((v) => v.id !== id)
    );
  };

  const handleAgregarVideojuego = (nombre: string) => {
    const nuevoVideojuego: VideojuegoType = {
      id: Date.now().toString(),
      nombre,
      jugado: false,
    };
    setVideojuegos((prevVideojuegos) => [...prevVideojuegos, nuevoVideojuego]);
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Lista Videojuegos</Text>
          <Pressable
            style={styles.botonAgregar}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textoBotonAgregar}>+ Agregar</Text>
          </Pressable>
        </View>
      </View>
      <ModalAgregarVideojuego
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAgregar={handleAgregarVideojuego}
      />
      <View>
        <Text>{videojuegos.length} videojuegos</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={videojuegos}
        renderItem={({ item }) => (
          <Videojuego
            videojuego={item}
            onToggleJugado={handleToggleJugado}
            onEliminar={handleEliminar}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.temporalContainer2}></View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 30,
    color: colors.text,
    fontSize: 35,
    flex: 1,
  },
  botonAgregar: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 20,
  },
  textoBotonAgregar: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 80,
    backgroundColor: colors.primary,
  },
  listContent: {
    padding: 15,
  },
  temporalContainer2: {
    backgroundColor: colors.secondary,
  },
});