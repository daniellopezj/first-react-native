import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import colors from '../../res/Colors'

const CoinsItem = ({ item }) => {

  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require(`../../assets/arrow_down.png`)
    } else {
      return require(`../../assets/arrow_up.png`)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image style={styles.imgIcon} source={getImgArrow()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flexDirection: "row",
      padding: 16,
      justifyContent: "space-between",
      borderBottomColor: colors.zircon,
      borderBottomWidth: .5,
      marginLeft: Platform.OS == 'android' ? 5 : 0
    },
    symbolText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
      marginRight: 12

    },
    nameText: {
      color: "white",
      fontSize: 14
    },
    row: {
      flexDirection: "row"
    },
    percentText: {
      fontSize: 12,
      color: "white"
    },
    priceText: {
      color: "white",
      fontSize: 14,
      marginLeft: 14
    },
    imgIcon: {
      width: 22,
      height: 22,
      marginLeft: 8
    }
  }

)

export default CoinsItem
