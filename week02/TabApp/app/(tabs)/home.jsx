import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function home() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white'
    
},
title: {
    fontSize: 45,
    color: 'lightgreen',
    fontFamily: 'hjbold',
}
})