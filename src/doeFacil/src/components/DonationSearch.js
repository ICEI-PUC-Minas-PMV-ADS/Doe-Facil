import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCheckBox = ({ isSelected, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
      {isSelected && <View style={styles.selected} />}
    </TouchableOpacity>
  );
};

const DonationSearch = () => {
  const [isDonationPointsSelected, setDonationPointsSelected] = useState(false);
  const [isDonationCandidatesSelected, setDonationCandidatesSelected] = useState(false);

  const handleDonationPointsChange = () => {
    setDonationPointsSelected(!isDonationPointsSelected);
    if (isDonationCandidatesSelected) {
      setDonationCandidatesSelected(false);
    }
  };

  const handleDonationCandidatesChange = () => {
    setDonationCandidatesSelected(!isDonationCandidatesSelected);
    if (isDonationPointsSelected) {
      setDonationPointsSelected(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de pesquisa:</Text>
      <View style={styles.checkboxContainer}>
        <CustomCheckBox
          isSelected={isDonationPointsSelected}
          onToggle={handleDonationPointsChange}
        />
        <Text style={styles.checkboxLabel}>Pontos de doação</Text>

        <CustomCheckBox
          isSelected={isDonationCandidatesSelected}
          onToggle={handleDonationCandidatesChange}
        />
        <Text style={styles.checkboxLabel}>Candidatos a doação</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    color: '#DE302F',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: 'red',
  },
  checkboxLabel: {
    color: '#DE302F',
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 8, // Adicionado espaçamento
  },
});

export default DonationSearch;
