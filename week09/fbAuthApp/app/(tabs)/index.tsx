import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Button } from "react-native-paper";
import { auth } from "../../FirebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { router, useNavigation } from "expo-router";

export default function TabOneScreen() {
  const auth = getAuth();
  const navigation = useNavigation();
  const signUserOut = async () => {
    try {
      await signOut(auth).then(() => {
        console.log("Signed Out");
        navigation.replace("index");
      });
    } catch (error) {
      console.log("error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <Text>Press the Sign Out Button</Text>
        <Button mode="contained" onPress={signUserOut}>
          Sign Out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
