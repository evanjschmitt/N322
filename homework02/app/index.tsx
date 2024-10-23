import { Text, View, StyleSheet, Image } from "react-native";
import {Colors} from '@/constants/Colors';
import {Button} from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../assets/images/frog.png')}>

        </Image>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.tagLineTop}>Look at this <Text style={styles.greenText}>Frog</Text>!</Text>
        <Text style={styles.tagLineTop}>He is playing old-time Jazz.</Text>
        <Text style={styles.tagLine}>What a whimsical creature</Text>
        <Button onPress={() => router.push("/(auth)/sign-in")} mode="text" style={styles.button}>
          <Text style={styles.lightText}>Sign In</Text>
        </Button> 
        <Button onPress={() => router.push("/(auth)/sign-up")} mode="text" style={styles.button}>
          <Text style={styles.lightText}>Sign Up</Text>
        </Button>
      </View>
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
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginBottom: 10,
    marginTop: -50,
  },
  logo: {
    width: 250,
    height: 250,
  },
  subContainer: {
    padding: 20,
    marginTop: -20,
  },
  tagLineTop: {
    fontSize: 30,
    textAlign: "center"
  },
  tagLine: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
    color: Colors.darkBrown,
    fontWeight: "bold",
  },
  greenText: {
    color: Colors.frogGreen,
  },
  button: {
    backgroundColor: Colors.lightGray,
    borderRadius: 50,
    marginTop: 30,
    padding: 10,
  },
  lightText: {
    // color: Colors.lightBrown,
    color: "white",
  }
})