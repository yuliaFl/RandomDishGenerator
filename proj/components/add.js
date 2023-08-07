import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, CheckBox, TextInput } from "react-native";

export default function Add({ navigation }) {
  const [garnir, setGarnir] = useState(false);
  const [meat, setMeat] = useState(false);
  const [random, setRandom] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        What's would you like to add?
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
      />
      <View style={styles.item}>
        <CheckBox
          value={garnir}
          onValueChange={() => setGarnir(!garnir)}
          tintColors={{ true: "#fc5185", false: "#fc5185" }}
        />
        <Text> Garnir</Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          value={meat}
          onValueChange={() => setMeat(!meat)}
          tintColors={{ true: "#fc5185", false: "#fc5185" }}
        />
        <Text> Meat</Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          value={random}
          onValueChange={() => setRandom(!random)}
          tintColors={{ true: "#fc5185", false: "#fc5185" }}
        />
        <Text> Random</Text>
      </View>
      <TouchableOpacity style={styles.submit}>
        <Text style={{ color: "white" }}>SUBMIT</Text>
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
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#364f6b",
    marginBottom: 40,
  },
  item: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  submit: {
    width: "80%",
    backgroundColor: "#fc5185",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginTop: 35,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: "80%",
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
  },
});
