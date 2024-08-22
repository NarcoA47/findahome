import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
        <Text>This is the messages screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})