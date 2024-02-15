import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Game");
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["black", "navy"]}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <View>
          <TouchableOpacity
            style={styles.button}
            title="welcome warrior"
            onPress={handlePress}
          >
            <Text style={styles.textButton}>press here to enter game</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  background: {
    width: 400,
    height: 300,
    alignContent: "center",
    alignItems: "center",
  },

  button: {
    opacity: 0.7,
    elevation: 8,
    backgroundColor: "black",
    padding: 25,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    fontStyle: "italic",
  },

  middleText: {
    color: "white",
    textShadowColor: "grey",
    fontSize: 18,
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
