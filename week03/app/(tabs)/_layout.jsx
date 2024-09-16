import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'


export default function _layout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.links
    }
        
    }>
    <Tabs.Screen name='home' 
    options={{headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}></Ionicons>
    }}
    /> 
    <Tabs.Screen name='about'
        options={{ headerShown: false, tabBarIcon: ({color}) => <Ionicons name="information-circle" size={24} color={color}/>

        }}
    />
    <Tabs.Screen name='settings'
    options={{ headerShown: false, tabBarIcon: ({color}) => <Ionicons name="settings-sharp" size={24} color={color}/>
    }}
    />
    </Tabs>
  )
}