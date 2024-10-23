import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useClerk } from "@clerk/clerk-expo";
import { useNavigation } from "expo-router";
import {Colors} from '@/constants/Colors';

export default function gallery() {
  const { signOut } = useClerk();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      navigation.replace("index");
    } catch (error) {
      console.log("Sign Out Error");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Gallery</Text>
      <Image style={styles.galleryImg} source={require("../../assets/images/poster.png")}/>
      <Image style={styles.galleryImg} source={require("../../assets/images/poster2.png")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signOutButton: {
    backgroundColor: Colors.frogGreen,
    marginTop: 20
  },
  signOutText: {
    color: "#fff",
  },
  galleryImg: {
    maxWidth: 200,
    maxHeight: 250,
    marginBottom: 50
  }
});
