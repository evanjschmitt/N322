import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})