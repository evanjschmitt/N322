import { StyleSheet, View, Button, Image } from "react-native";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
// Importing the FileSaver module (for Web only)
import { saveAs } from "file-saver";

export default function webpic() {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capturePhoto = () => {
    const image = webcamRef.current.getScreenshot(); // Capture image from webcam
    setImageSrc(image); // Set the captured image URL to state
  };

  // Save image to the computer (only works on the web)
  const saveToComputer = () => {
    if (imageSrc) {
      // Create a blob from the captured image (which is a base64 data URL)
      const imageBlob = dataURLToBlob(imageSrc);
      // Use FileSaver to save the image
      saveAs(imageBlob, "captured_image.jpg"); // Name the file as needed
    }
  };

  // Helper function to convert base64 image to Blob (needed for FileSaver)
  const dataURLToBlob = (dataURL) => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  };

  return (
    <View style={styles.container}>
      {!imageSrc ? (
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%" // Webcam width
          videoConstraints={{
            facingMode: "user", // Optional: Ensures front camera on supported devices
          }}
        />
      ) : (
        <Image source={{ uri: imageSrc }} style={styles.capturedImage} />
      )}
      <Button
        title={!imageSrc ? "Capture" : "Retake"} // Toggle text based on image capture state
        onPress={() => {
          if (imageSrc) {
            setImageSrc(null); // Reset the image if retake
          } else {
            capturePhoto(); // Capture photo
          }
        }}
      />
      {imageSrc && (
        <Button
          title="Save to Computer"
          onPress={saveToComputer} // Trigger the save function
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webcam: {
    width: 400, // Webcam dimensions
    height: 300,
  },
  capturedImage: {
    width: 400, // Image dimensions
    height: 300,
  },
});
