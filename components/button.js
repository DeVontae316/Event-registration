import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, input }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{input}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  text: {
    color: "white",
    fontSize: 20,
  }
})
export default Button;