
import React, { useEffect, useContext, useState } from 'react';
import { View, FlatList, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import AppContext from '../../context/AppContext'
import { get } from '../../libs/Http'
import CoinsItem from './CoinsItem'
import Colors from '../../res/Colors'
import CoinsSearch from './CoinsSearch'

const CoinsScreen = (props) => {
  const [loading, setLoading] = useState(true)
  const { state, setList, listCoinsSearch } = useContext(AppContext)
  const { allCoins, coinsSearch } = state

  useEffect(() => {
    async function getDataFetch() {
      const dataFetch = await get('tickers')
      setList(dataFetch.data)
      setLoading(false)
    }
    getDataFetch()
  }, [])

  const handlePress = (coinDetail) => {
    props.navigation.navigate('CoinDetail', { coinDetail })
  }

  const handleSearch = (query) => {
    const coinsFilter = allCoins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase()))
    listCoinsSearch(coinsFilter)
  }

  return (
    <View style={styles.container}>
      <CoinsSearch onchange={handleSearch} />
      {
        loading
          ? <ActivityIndicator
            style={styles.loader}
            color="#fff"
            size="large" />
          : <FlatList
            data={coinsSearch}
            renderItem={({ item }) => (<CoinsItem item={item} onPress={() => handlePress(item)} />)} >
          </FlatList>
      }

      {/* <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>go to details
        </Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: Colors.charade,
    },
    titleText: {
      color: "#fff",
      textAlign: "center"
    },
    btn: {
      padding: 8,
      backgroundColor: "green",
      borderRadius: 8,
      margin: 16,
    },
    loader: {
      marginTop: 60
    }
  }
)
export default CoinsScreen;
