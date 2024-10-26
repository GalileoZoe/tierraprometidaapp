import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Feed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Feed
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#db1313',
    fontSize: 30,
    textAlign: 'center',
  }
})
