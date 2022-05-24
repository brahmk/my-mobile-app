import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Counter from "./src/components/counter";

import Hero from "./src/components/Hero";

export default function App() {
  return (
    <View style={styles.container}>
      <Hero />

      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffaaee",
    alignItems: "center",
    justifyContent: "center",
  },
});
