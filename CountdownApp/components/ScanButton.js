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
    backgroundColor: '#27AE60',
    padding: 15,
    marginTop: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  }
});

