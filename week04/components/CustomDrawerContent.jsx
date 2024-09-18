import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export function CustomDrawerContent(props) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: "#dde899" }}
      >
        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://media.discordapp.net/attachments/1028829310301253783/1286055213031227435/IMG_20240918_160356.jpg?ex=66ec83c0&is=66eb3240&hm=3ca0e4cbaf50e52b1d5391ee6b9eaa6d9847413f45f24006b4ab26c4a8933e27&=&format=webp&width=503&height=671",
            }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 18,
              paddingTop: 10,
              color: "#5363df",
            }}
          >
            Ev Schmitt
          </Text>
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
          <DrawerItem  labelStyle={{marginLeft: -20}}
            label={"Logout"}
            icon={({ size, color }) => (
              <Ionicons name="exit-outline" size={size} color={color} />
            )}
            onPress={() => router.replace("/")}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#000",
          borderTopWidth: 2,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  );
}
