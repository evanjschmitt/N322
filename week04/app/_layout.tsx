import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {CustomDrawerContent} from "./../components/CustomDrawerContent"
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            headerTitle: "Home",
            drawerIcon: ({size, color}) => (
              <Ionicons name='home-outline' size={size} color={color}/>
            )
          }}
        />
         <Drawer.Screen
          name="news"
          options={{
            drawerLabel: "News",
            headerTitle: "News",
            drawerIcon: ({size, color}) => (
              <Ionicons name="newspaper-outline" size={size} color={color}/>
            )
          }}
        />
         <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            headerTitle: "My Profile",
            drawerIcon: ({size, color}) => (
              <Ionicons name="person-outline" size={size} color={color}/>
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
