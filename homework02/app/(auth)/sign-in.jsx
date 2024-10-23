import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter, Link } from "expo-router";
import {Colors} from '@/constants/Colors';

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();
  const onSignIn = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(signInAttempt, null, 2));
    }
  }, [isLoaded, emailAddress, password]);
  return (
    <View style={styles.container}>
      <View style={styles.signInArea}>
        <TextInput
          style={styles.signInBox}
          autoCapitalize="none"
          value={emailAddress}
          keyboardType="email-address"
          placeholder="Email Address"
          onChangeText={setEmailAddress}
        />
        <TextInput
          style={styles.signInBox}
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry="true"
        />
        <Button mode="outlined" onPress={onSignIn}>
          <Text>Sign In</Text>
        </Button>
      </View>
      <View style={styles.needAccount}>
        <Text>Don't have an account?</Text>
        <Link style={styles.signUpButton} href="/sign-up">
          <Text >Sign Up</Text>
        </Link>
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
  signInArea: {
    marginBottom: 20,
  },
  signInBox: {
    marginBottom: 25,
  },
  needAccount: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpButton: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    backgroundColor: Colors.lightGray,
    color: "white",
  },
});
