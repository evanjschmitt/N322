import { View, Text } from "react-native";
import React from "react";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" />

      <Tabs.Screen name="Products" />

      <Tabs.Screen name="Contact" />
    </Tabs>
  );
}
