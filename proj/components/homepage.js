import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  number,
  Button,
} from "react-native";

export default function Random({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Add"
        onPress={() => navigation.navigate("Add")}
      />
      <p> </p>
      <Button
        style={styles.button}
        title="Generate"
        onPress={() => navigation.navigate("Generate")}
      />
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
});