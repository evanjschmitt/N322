import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "chakra-bold":require('./../assets/fonts/ChakraPetch-Bold.ttf'),
    "chakra-med":require('./../assets/fonts/ChakraPetch-Medium.ttf'),
    "chakra-light":require('./../assets/fonts/ChakraPetch-Light.ttf'),
  })
  
  
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
