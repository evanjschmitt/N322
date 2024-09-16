import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {{
  useFonts({'hjreg':require('../assets/fonts/Handjet-Regular.ttf')}),
  useFonts({'hjmed':require('../assets/fonts/Handjet-Medium.ttf')}),
  useFonts({'hjbold':require('../assets/fonts/Handjet-Bold.ttf')}) 
}
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  )
}