import React, { useEffect, useContext, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import colors from '../../res/Colors'
import AppContext from '../../context/AppContext'
import FavoritesEmptyState from './FavoritesEmptyState'
import { getAllKeys, getAll } from '../../libs/storage'
import CoinsItem from '../coins/CoinsItem'

const FavoritesScreen = ({ navigation }) => {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation])

  const getData = async () => {
    const allKeys = await getAllKeys()
    const keys = allKeys.filter((key) => key.includes('favorite='))
    const favs = await getAll(keys)
    const allFavorites = favs.map((fav) => JSON.parse(fav[1]))
    setFavorites(allFavorites)
  }

  handlePress = (coinDetail) => {
    navigation.navigate('CoinDetail', { coinDetail })
  }

  return (
    <View style={styles.container}>
      {
        favorites.length === 0
          ? <FavoritesEmptyState />
          : <FlatList
            data={favorites}
            renderItem={({ item }) =>
              <CoinsItem
                item={item}
                onPress={() => handlePress(item)}
              />}
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
})


export default FavoritesScreen
