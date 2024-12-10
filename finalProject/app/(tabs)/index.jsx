import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { signOut, getAuth } from "firebase/auth";
import { useNavigation } from "expo-router";
import { Image } from "react-native-web";

export default function TabOneScreen() {
  return (
    <View style={styles.homePage}>
      <View style={styles.container}>
        <Text style={styles.title}>N322 Final</Text>
        <Text style={styles.bodyText}>
          Welcome to my site! Please Leave a comment while you're here :)
        </Text>
        <View>
          <Image
            source={require("../../assets/images/image.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.imgCaption}>Me During Finals Week</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    margin: "auto",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 20,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    marginTop: 50,
    borderRadius: 20,
  },
  imgCaption: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10
  }
});
