import { Tabs } from "expo-router";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from "../../constants/Colors"

export default function TabLayout() {
  return (
    <Tabs screenOptions={
      {tabBarActiveTintColor: Colors.links,
        headerShown: false
      }}>
      <Tabs.Screen name="home" 
      options={{
        tabBarLabel: "TAB APP",
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
        ),
      }} />
      <Tabs.Screen name="about" 
      options={{
        tabBarLabel: "ABOUT US",
        tabBarIcon: ({ color }) => (
          <Ionicons name="help-circle" size={24} color={color} />
        ),
      }} />
      <Tabs.Screen name="contact" 
      options={{
        tabBarLabel: "CONTACT US",
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-circle" size={24} color={color} />
        ),
      }} />
    </Tabs>);
}
