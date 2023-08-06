import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  number,
  Button,
  text,
  CheckBox,
} from "react-native";

export default function Add({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} placeholder="What to add" />
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text style={styles.label}> Garnir</Text>
      </View>
      <Button style={styles.button} title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  button: {
    height: 40,
    width: 1000,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
