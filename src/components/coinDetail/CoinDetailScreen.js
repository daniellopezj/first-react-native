import React, { useEffect, useState, useContext, useCallback } from 'react'
import { View, Text, Image, StyleSheet, FlatList, SectionList, Pressable, Alert, ActivityIndicator } from 'react-native'
import Colors from '../../res/Colors'
import AppContext from '../../context/AppContext'
import { get } from '../../libs/Http'
import CoinMarketItem from './CoinMarketItem'
import { getStorage, postStore, removeStorage } from '../../libs/storage'

const CoinDetailScreen = ({ route, navigation }) => {
  const { coinDetail } = route.params
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const { state, listMarkets } = useContext(AppContext)
  const { markets } = state
  const [coin, setCoin] = useState(coinDetail)

  useEffect(() => {
    setLoading(true)
    navigation.setOptions({ title: coin.name })
    setCoin(coinDetail)
    async function getMarkets() {
      const markets = await get(`coin/markets/?id=${coin.id}`)
      listMarkets(markets)
      setLoading(false)
    }
    getMarkets()
    getFavorites()
  }, [coinDetail])

  async function getFavorites() {
    try {
      const key = `favorite=${coin.id}`
      const favStr = await getStorage(key)
      setIsFavorite(!!favStr)
    } catch (error) {
      console.log('getFavorites', error);
    }
  }

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

  toggleFavorite = async () => {
    const coinDetail = JSON.stringify(coin)
    const key = `favorite=${coin.id}`
    let stored;
    if (!isFavorite) {
      stored = await postStore(key, coinDetail)
      if (stored) {
        setIsFavorite(!isFavorite)
      }
    } else {
      removeFavorite(key)
    }
  }

  removeFavorite = async (key) => {
    Alert.alert("Remove Favorite", "Are you sure?", [
      {
        text: "cancel",
        onPress: () => { },
        style: "cancel"
      },
      {
        text: "Remove",
        onPress: async () => {
          const stored = await removeStorage(key)
          if (stored) {
            setIsFavorite(!isFavorite)
          }
        },
        style: "destructive"
      }
    ])
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.subHeader}>
        <View style={Styles.row}>
          <Image style={Styles.iconImage} source={{ uri: getSymbolIcon(coin.name) }} />
          <Text style={Styles.textTitle}> {coin.name}</Text>
        </View>
        <Pressable
          onPress={toggleFavorite}
          style={[
            Styles.btnFavorite,
            isFavorite ? Styles.btnFavoriteRemove : Styles.btnFavoriteAdd
          ]}>
          <Text style={Styles.btnFavoriteText}>{isFavorite ? 'remove ' : 'add'}Favorite </Text>
        </Pressable>
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
      {
        loading
          ? <ActivityIndicator
            style={Styles.loader}
            color="#fff"
            size="large" />
          : <FlatList
            style={Styles.list}
            horizontal={true}
            data={markets}
            renderItem={({ item }) => <CoinMarketItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />

      }

    </View >
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  },
  loader: {
    marginTop: 60
  },
  row: {
    flexDirection: "row"
  },
  list: {
    maxHeight: 100,
    padding: 5
  },
  subHeader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between"
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
    color: Colors.white,
  },
  TextHeaderSection: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "bold"
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton
  },
  btnFavoriteRemove: {
    backgroundColor: Colors.carmine
  },
  btnFavoriteText: {
    color: Colors.white
  }
})

export default CoinDetailScreen;
