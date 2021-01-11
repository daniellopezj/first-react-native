import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../res/Colors'

const CoinMarketItem = ({ item }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.nameText}> {item.name}</Text>
      <Text style={Styles.priceText}> {item.price_usd}</Text>
    </View>
  )
}

export default CoinMarketItem

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: colors.zircon,
    borderWidth: .5,
    // maxWidth: ,
    margin: 6,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameText: {
    color: "#fff",
    fontWeight: "bold",
  },
  priceText: {
    color: "#fff"
  },
})

