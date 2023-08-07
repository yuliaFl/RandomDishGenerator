import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  number,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Random({ navigation }) {
  const [words, setWords] = useState([
    "Блины с мясом",
    "Макороны по флодски",
    "Пельмени",
    "Гороховый суп",
    "Плов",
  ]);
  const [randomWord, setRandomWord] = useState("Блюда");
  const [lastIndex, setLastIndex] = useState(-1);

  const search = () => {
    let randomIndex = Math.floor(Math.random() * words.length);
    while (randomIndex === lastIndex) {
      randomIndex = Math.floor(Math.random() * words.length);
    }
    setLastIndex(randomIndex);
    setRandomWord(words[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <h1>{randomWord}</h1>
      <TouchableOpacity style={styles.button} title="Generate" onPress={search}>
        <Text style={{ color: "white" }}>Search</Text>
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
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
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
