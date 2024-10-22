import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native-web";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../assets/images/week05Logo.png")}
        />
        <View style={styles.subcontainer}>
          <Text style={styles.tagLineTop}>
            Learn how to <Text style={styles.goldText}>Code!</Text>
          </Text>
          <Text>Come Check us Out!</Text>
          <Text>Est. 2024</Text>
          <TouchableOpacity style={styles.btn}>
            <Text>Sign Up Today!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    marginTop: 25
  },
  
    logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 250,
    height: 250,
  },

  subcontainer: {
    padding: 20,
    marginTop: -20,
    alignItems: "center",
  },

  tagLineTop: {
    fontSize: 30,
    textAlign: "center",
  },

  goldText: {
    color: Colors.GOLD,
  },

  tagLineBottom: {
    fontSize: 20,
    textAlign: "center",
  },

  btn: {
    backgroundColor: Colors.GOLD,
    padding: 20,
    alignItems: "center",
    borderRadius: 25,
    marginTop: 15,
  },
});
