import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Colors } from "../../constants/Colors";

export default function home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSec}>
        <Text style={styles.titleText}>Ev's Albums</Text>
        <Text style={styles.subtitleText}>
          Your favorite music, all in one place.
        </Text>
        <Text style={styles.header}>
            Albums In Stock:
        </Text>
        <View style={styles.albumContainer}>
          <Link style={styles.albumButton} href="/products">
            <Image
              style={styles.albumImg}
              source={require("../../assets/images/bandoStone.png")}
            ></Image>
            <Text style={styles.albumText}>Bando Stone & the New World{"\n"}</Text>

            <Text style={styles.albumDesc}>Childish Gambino{"\n"}</Text>

            <Text style={styles.albumDesc}>$29.99</Text>
          </Link>
          <Link style={styles.albumButton} href="/products">
            <Image
              style={styles.albumImg}
              source={require("../../assets/images/ICIMI.png")}
            ></Image>

            <Text style={styles.albumText}>{"\n"}In Case I Make It{"\n"}</Text>

            <Text style={styles.albumDesc}>Will Wood{"\n"}</Text>

            <Text style={styles.albumDesc}>$24.99</Text>
          </Link>
        </View>
        <View style={styles.albumContainer}>
          <Link style={styles.albumButton} href="/products">
            <Image
              style={styles.albumImg}
              source={require("../../assets/images/jimmy.png")}
            ></Image>

            <Text style={styles.albumText}>Living and Dying in 3/4 Time{"\n"}</Text>

            <Text style={styles.albumDesc}>Jimmy Buffett{"\n"}</Text>

            <Text style={styles.albumDesc}>$19.99</Text>
          </Link>
          <Link style={styles.albumButton} href="/products">
            <Image
              style={styles.albumImg}
              source={require("../../assets/images/noah.png")}
            ></Image>
            <View style={styles.alumTextWrap}></View>
            <Text style={styles.albumText}>Live From Fenway Park{"\n"}</Text>
            <Text style={styles.albumDesc}>Noah Kahan{"\n"}</Text>
            <Text style={styles.albumDesc}>$29.99</Text>
          </Link>
        </View>
      </View>
      <View>
        {/* <Image source={require("../../assets/images/walt.png")}></Image>
        <Image></Image> */}
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
  header: {
    fontSize: 40,
    fontFamily: "chakra-med",
    paddingLeft: 10,
    marginBottom: `20px`
  },

  subtitleText: {
    fontFamily: "chakra-med",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  albumButton: {
    padding: (15, 10),
    color: "#fff",
    backgroundColor: "#0a7ea4",
    textAlign: "center",
    width: "25%",
    height: "60%",
    borderRadius: 15,
    // flexWrap: "wrap",
    // flexDirection: "row",
  },
  albumImg: {
    borderRadius: 15,
    maxWidth: 150,
    maxHeight: 150,
  },
  albumText: {
    fontSize: 20,
    whiteSpace: "pre-wrap",
  },
  topSec: {
    backgroundColor: "white",
    padding: 20,
    // Default is 'column', but you can specify it
  },

  albumContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
  },
});
