import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const CustomDropdown = ({ options, selectedValue, onValueChange }) => {
  const [visible, setVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Selecione...');

  return (
    <View style={{ marginVertical: 10 }}> 
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.selectionBox}>
          <Text style={styles.selectedText}>{selectedLabel}</Text> 
        </View>
      </TouchableOpacity>

      <Modal visible={visible} transparent={true}>
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  onValueChange(item.value);
                  setSelectedLabel(item.label); 
                  setVisible(false);
                }}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectionBox: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10, 
  },
  selectedText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    maxHeight: '80%',
    marginVertical: 10, 
  },
  optionText: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});

export default CustomDropdown;
