import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { signOut, getAuth } from "firebase/auth";
import { useNavigation } from "expo-router";

export default function TabOneScreen() {
  const auth = getAuth();
  const navigation = useNavigation();

  const signUserOut = async () => {
    try {
      await signOut(auth).then(() => {
        // when a user signs out what do we want to do
        console.log("user signed out");
        navigation.replace("index");
      });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Out</Text>
      <View>
        <Text style={styles.subTitle}>We Hope You Enjoyed Your Stay!</Text>
        <Text style={styles.instruction}>
          In order to sign out, press the button below.
        </Text>
        <Button
          mode="contained"
          onPress={signUserOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Sign Out
          </Text>
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
    fontSize: 50,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 25,
  },
  instruction: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#394F49",
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
    marginTop: 25
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  }
});
