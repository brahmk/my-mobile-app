import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Counter from "./src/components/counter";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>do not</Text>
     
      <Button title='press me'/> */}

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
