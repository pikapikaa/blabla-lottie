import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200
        }}
        source={require("./assets/133564-typing.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
