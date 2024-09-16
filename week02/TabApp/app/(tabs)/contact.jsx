import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function contact() {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>contact</Text>
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
      fontSize: 32,
      color: 'lightgreen',
  }
  })