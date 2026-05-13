import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../styles/colors';

type ModalAgregarVideojuegoProps = {
  visible: boolean;
  onClose: () => void;
  onAgregar: (nombre: string) => void;
};

const ModalAgregarVideojuego = ({
  visible,
  onClose,
  onAgregar,
}: ModalAgregarVideojuegoProps) => {
  const [nombre, setNombre] = useState('');

  const handleAgregar = () => {
    if (nombre.trim()) {
      onAgregar(nombre);
      setNombre('');
      onClose();
    }
  };

  const handleClose = () => {
    setNombre('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.overlay} />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titulo}>Agregar Videojuego</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre del videojuego"
              placeholderTextColor="#999"
              value={nombre}
              onChangeText={setNombre}
              maxLength={50}
            />

            <View style={styles.botonesContinaer}>
              <Pressable
                style={[styles.boton, styles.botonCancelar]}
                onPress={handleClose}
              >
                <Text style={styles.textoBoton}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={[styles.boton, styles.botonAgregar]}
                onPress={handleAgregar}
              >
                <Text style={styles.textoBoton}>Agregar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalAgregarVideojuego;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '85%',
    maxWidth: 400,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.primary,
  },
  botonesContinaer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  boton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonCancelar: {
    backgroundColor: '#95a5a6',
  },
  botonAgregar: {
    backgroundColor: '#27ae60',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
