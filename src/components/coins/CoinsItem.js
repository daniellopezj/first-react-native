import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CoinsItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.textItem}>{item.name}</Text>
      <Text style={styles.textItem}>{item.symbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    btnText: {
      color: "#fff",
      textAlign: "center"
    },
    textItem: {
      color: "red"
    }
  }

)

export default CoinsItem
