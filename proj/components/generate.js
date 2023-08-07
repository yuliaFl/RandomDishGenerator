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

export default function Generate({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Гарнир"
        onPress={() => navigation.navigate("Garnir")}
      />
      <p> </p>
      <Button
        style={styles.button}
        title="Мясо"
        onPress={() => navigation.navigate("Meat")}
      />
      <p></p>
      <Button
        style={styles.button}
        title="Блюда"
        onPress={() => navigation.navigate("Random")}
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
    width: "80%",
    backgroundColor: "#fc5185",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
