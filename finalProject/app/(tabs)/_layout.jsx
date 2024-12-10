import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text } from "react-native";
import { Link, Tabs } from "expo-router";
import { Pressable, Platform } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#394F49", // Color for the active tab
        tabBarInactiveTintColor: "#EFDD8D", // Color for inactive tabs
        tabBarStyle: styles.tabBarStyle, // Custom style for the tab bar
        tabBarLabelStyle: styles.tabBarLabel, // Style for tab labels
        headerShown: false, // Hides the header
        tabBarActiveBackgroundColor: "#C5EDAC"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home Page",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="comments"
        options={{
          title: "Comments",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="comments" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="signOut"
        options={{
          title: "Sign Out",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="sign-out" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#394F49", // Background color for the tab bar
    borderTopWidth: 1, // Border at the top of the tab bar
    borderTopColor: "#ccc", // Border color
    height: "8%", // Height of the tab bar
  },
  tabBarLabel: {
    fontSize: 18, // Font size of tab labels
    fontWeight: "500", // Font weight for the labels
    marginLeft: 12
  },
});
