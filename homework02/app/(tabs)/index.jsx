import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useClerk } from "@clerk/clerk-expo";
import { useNavigation } from "expo-router";
import {Colors} from '@/constants/Colors';

export default function index() {
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
      <Text>Home</Text>
      <Image style={styles.siteImg} source={require("../../assets/images/wirt.png")}/>
      <Button style={styles.signOutButton} mode="outlined" onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </Button>
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
  siteImg: {
    width: 350,
    height: 250,
  }
});
