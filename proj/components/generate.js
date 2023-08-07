import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  number,
  Button,
  TouchableOpacity
} from "react-native";

export default function Generate({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        title="Generate"
        onPress={() => navigation.navigate("Garnir")}
      >
        <Text style={{ color: "white" }}>Garnir</Text>
      </TouchableOpacity>
      <p> </p>
      <TouchableOpacity
        style={styles.button}
        title="Generate"
        onPress={() => navigation.navigate("Meat")}
      >
        <Text style={{ color: "white" }}>Meat</Text>
      </TouchableOpacity>
      <p></p>
      <TouchableOpacity
        style={styles.button}
        title="Generate"
        onPress={() => navigation.navigate("Random")}
      >
        <Text style={{ color: "white" }}>Random</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginLeft: 30,
    marginRight: 15,
  },
  button: {
    width: "60%",
    backgroundColor: "#088F8F",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
