import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {StyleSheet,Text,View, TextInput, number,Button } from "react-native"; 

export default function Random({ navigation }) {
    const [words, setWords] = useState(['Гречка', 'Макароны', 'Рис', 'Пюрэ', 'Запеченая картошка']);
    const [randomWord, setRandomWord] = useState("Гарнир");
    const [lastIndex, setLastIndex] = useState(-1);
  
    const onPressButton = () => {
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
        <Button
          title="Мне все равно"
          onPress={onPressButton}
        />
      </View>
    )
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
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
      },
      button: {
        height: 40,
        width: 200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText:{
        color: 'white',
        fontSize: 16,
      },
  });