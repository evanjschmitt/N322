import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import LoginScreen from "./../components/LoginScreen.jsx"
import { Text, View } from "react-native";
const publishKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
if (!publishKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}
export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishKey}>
      <ClerkLoaded>
        <SignedIn>
          <Stack>
            <Stack.Screen name="./(tabs)/home.jsx" />
          </Stack>
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>

    // {/*  */}
  );
}
