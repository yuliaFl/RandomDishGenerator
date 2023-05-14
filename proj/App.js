import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Random from "./components/random";
import Homepage from "./components/homepage";
import Garnir from "./components/garnir";
import Meat from "./components/meat";

const Stack = createNativeStackNavigator();

function MyStack() {
  var options = {
    headerStyle: { backgroundColor: '#262361' },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Group screenOptions={options}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Random" component={Random} />
      <Stack.Screen name="Garnir" component={Garnir} />
      <Stack.Screen name="Meat" component={Meat} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
