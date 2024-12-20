import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text } from "react-native";
import { Link, Tabs } from "expo-router";
import { Pressable, Platform } from "react-native";

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
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Name List",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      if () {}
      {Platform.OS === "web" ? (
        <Tabs.Screen
          name="webpic"
          options={{
            title: "Web Image",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="image" color={color} />
            ),
          }}
        />
      ) : (
        <Tabs.Screen
          name="picture"
          options={{
            title: "Take Picture",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="camera" color={color} />
            ),
          }}
        />
      )}
    </Tabs>
  );
}
