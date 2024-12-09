//Imports
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import { ImageBackground } from "react-native";
import * as location from "expo-location";

export default function HomeScreen() {
  const [{ x, y, z }, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 });
  const [errorMsg, setErrorMsg] = useState("");
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 100,
          distanceInterval: 0,
        },
        (location) => {
          const speedInMph = location.coords.speed * 2.23694;
          setSpeed(speedInMph);
        }
      );

      return () => subscription.remove();
    })();
  }, []);

  useEffect(() => {
    const subscription = Accelerometer.addListener((data) => {
      setAccelerometerData(data);
    });

    Accelerometer.setUpdateInterval(100);

    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <ImageBackground
      source={require("@/assets/images/car.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Accelerometer Data:</Text>
        <Text style={styles.data}>X: {x.toFixed(2)}</Text>
        <Text style={styles.data}>Y: {y.toFixed(2)}</Text>
        <Text style={styles.data}>Z: {z.toFixed(2)}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Current Speed:</Text>
        {errorMsg ? (
          <Text style={styles.error}>{errorMsg}</Text>
        ) : (
          <Text style={styles.data}>
            {speed !== null ? `${speed.toFixed(2)} mph` : "Calculating..."}
          </Text>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure it covers the whole screen
    resizeMode: "cover", // Ensures the image scales appropriately
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  data: {
    fontSize: 16,
    marginVertical: 5,
    color: "white",
  },
  error: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
});
