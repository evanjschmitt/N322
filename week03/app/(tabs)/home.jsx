import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Colors } from "../../constants/Colors";

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.topSec}>
        <Text style={{ fontFamily: "chakra-bold" }}>home</Text>
        <Text style={{ fontFamily: "chakra-med" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque soluta
          eum totam necessitatibus? Iusto, voluptate.
        </Text>

        <Link style={styles.aboutButton} href="/about">
          Go To About
        </Link>

        <Button title="Go to..." onPress={() => router.push("about")}></Button>
      </View>
      <View>
        <Image source={require("../../assets/images/walt.png")}></Image>
        <Image></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "lightgray",
  },
  aboutButton: {
    padding: (5, 10),
    color: "#fff",
    backgroundColor: "#0a7ea4",
    textAlign: "center",
    width: "50%",
  },
  topSec: {
    backgroundColor: "white",
    padding: 20,
  }
});
