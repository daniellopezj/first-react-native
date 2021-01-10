import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image, StyleSheet, FlatList, SectionList } from 'react-native'
import Colors from '../../res/Colors'
import AppContext from '../../context/AppContext'
import { get } from '../../libs/Http'
import CoinMarketItem from './CoinMarketItem'

const CoinDetailScreen = ({ route, navigation }) => {

  const { coinDetail } = route.params
  const [coin, setCoin] = useState(coinDetail)
  const { state, listMarkets } = useContext(AppContext)
  const { markets } = state

  getSymbolIcon = (nameString) => {
    if (nameString) {
      const name = nameString.toLowerCase().replace(" ", "-")
      return `https://c1.coinlore.com/img/25x25/${name}.png`
    }
  }

  getSecctions = () => {
    const sections = [
      {
        title: "Market cap",
        data: [coin.market_cap_usd]
      },
      {
        title: "Volumen 24h",
        data: [coin.volume24]
      },
      {
        title: "Change 24h",
        data: [coin.percent_change_24h]
      }
    ]
    return sections
  }

  useEffect(() => {
    navigation.setOptions({ title: coin.name })
    async function getMarkets() {
      const markets = await get(`coin/markets/?id=${coin.id}`)
      listMarkets(markets)
    }
    getMarkets()
  }, [])

  return (
    <View style={Styles.container}>
      <View style={Styles.subHeader}>
        <Image style={Styles.iconImage} source={{ uri: getSymbolIcon(coin.name) }} />
        <Text style={Styles.textTitle}> {coin.name}</Text>
      </View>
      <SectionList
        style={Styles.sectionList}
        sections={getSecctions()}
        keyExtractor={(item) => item}
        renderItem={({ item }) =>
          <View style={Styles.sectionItem}>
            <Text style={Styles.textItem}>{item}</Text>
          </View>
        }
        renderSectionHeader={({ section }) =>
          <View style={Styles.sectionHeader}>
            <Text style={Styles.TextHeaderSection}>{section.title}</Text>
          </View >
        }
      />
      <Text style={Styles.MarketTitle}> Markets</Text>
      <FlatList
        style={Styles.list}
        horizontal={true}
        data={markets}
        renderItem={({ item }) => <CoinMarketItem item={item} />} />
    </View >
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  },
  list: {
    maxHeight: 100,
    padding: 5
  },
  subHeader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 16,
    flexDirection: "row"
  },
  sectionList: {
    maxHeight: 200
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginLeft: 8
  },
  MarketTitle: {
    fontSize: 16,
    color: "white",
    marginTop: 16,
    marginLeft: 8,
    fontWeight: 'bold'
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  sectionHeader: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 8
  },
  sectionItem: {
    padding: 8
  },
  textItem: {
    fontSize: 14,
    color: "white",
  },
  TextHeaderSection: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold"
  },
})

export default CoinDetailScreen;
