import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../res/Colors'
import FavoritesEmptyState from './FavoritesEmptyState'

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <FavoritesEmptyState />
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
