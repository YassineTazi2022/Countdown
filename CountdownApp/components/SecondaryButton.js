import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ScanButton() {
  return (
    <TouchableOpacity style={styles.button} onPress={() => console.log('Scan button pressed')}>
      <Text style={styles.buttonText}>Scan Products & Win</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#27AE60',},
  buttonText: {
    color: '#27AE60',
    fontSize: 16,
    fontWeight: '600',
  }
});

