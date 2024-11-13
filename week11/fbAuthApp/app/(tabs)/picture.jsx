import { Alert, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { Button } from "react-native-paper";

export default function picture() {
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [webcamStream, setWebcamStream] = useState(null);
  const takePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveToCameraRoll = async () => {
    if (!image) {
      Alert.alert("No image to save!");
      return;
    }
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need storage permissions!");
      return;
    }

    try {
      await MediaLibrary.saveToLibraryAsync(image);
      Alert.alert("Image Saved! Looking Good!");
    } catch (error) {
      Alert.alert("Failed to save image: ", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={takePicture}>Take Picture!</Button>
      {image && <Image source={{ uri: image }} style={styles.image}></Image>}
      {image && <Button onPress={saveToCameraRoll}>Save To Camera Roll</Button>}
      <Text>picture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
  },
});
