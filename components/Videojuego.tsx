import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../styles/colors';
import { Videojuego as VideojuegoType } from '../data/videojuegosData';

type VideojuegoProps = {
  videojuego: VideojuegoType;
  onToggleJugado: (id: string) => void;
  onEliminar: (id: string) => void;
};

const Videojuego = ({ videojuego, onToggleJugado, onEliminar }: VideojuegoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contenido}>
        <Pressable
          style={[styles.checkbox, videojuego.jugado && styles.checkboxActive]}
          onPress={() => onToggleJugado(videojuego.id)}
        >
          <Text style={styles.checkboxText}>
            {videojuego.jugado ? '✓' : ''}
          </Text>
        </Pressable>
        <Text style={[styles.nombre, videojuego.jugado && styles.nombreJugado]}>
          {videojuego.nombre}
        </Text>
      </View>
      <Pressable
        style={styles.botonEliminar}
        onPress={() => onEliminar(videojuego.id)}
      >
        <Text style={styles.textoBoton}>Eliminar</Text>
      </Pressable>
    </View>
  );
};

export default Videojuego;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.secondary,
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contenido: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: colors.text,
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  checkboxActive: {
    backgroundColor: '#27ae60',
    borderColor: '#27ae60',
  },
  checkboxText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nombre: {
    color: colors.text,
    fontSize: 16,
    flex: 1,
  },
  nombreJugado: {
    opacity: 0.6,
  },
  botonEliminar: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
