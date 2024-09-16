import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function contact() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSec}>
        <Text style={styles.titleText}>Ev's Albums</Text>
        <Text style={styles.subtitleText}>
          Your favorite music, all in one place.
        </Text>
      </View>
      <View style={styles.homeSection}>
        <Text style={styles.header}>Contact Us:</Text>
        <SafeAreaView>
          <TextInput style={styles.input} placeholder="Full Name:" />
          <TextInput style={styles.input} placeholder="Email Address:" />
          <TextInput style={styles.input} placeholder="Phone Number:" />
          <Button>
            <Text style={styles.submitButton}>Submit Form</Text>
          </Button>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "lightgray",
  },
  titleText: {
    fontFamily: "chakra-bold",
    fontSize: 25,
    alignSelf: "center",
  },

  subtitleText: {
    fontFamily: "chakra-med",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  topSec: {
    backgroundColor: "white",
    padding: 20,
    // Default is 'column', but you can specify it
  },
  homeSection: {
    backgroundColor: "white",
  },

  header: {
    fontSize: 40,
    fontFamily: "chakra-med",
    paddingLeft: 10,
    marginBottom: `20px`,
  },
  input: {
    backgroundColor: "whtie",
    borderColor: "black",
    borderWidth: 1,
    fontSize: 25,
    height: 50,
    margin: 15,
  },

  submitButton: {
    width: "20px",
    height: 50,
    marginTop: 20,
  },
});
