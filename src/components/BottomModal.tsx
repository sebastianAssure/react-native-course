import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Colors } from '../constants/colors';
import { BottomModalProps } from '../interfaces/BottomModalProps';

const { height } = Dimensions.get('window');

export const BottomModal = ({ visible, onClose, children }: BottomModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />
        <View style={styles.modalContent}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.backgroundModal,
  },
  backdrop: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: height * 0.3,
  },
});
