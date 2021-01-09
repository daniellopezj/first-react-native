
import React, { useEffect, useContext, useState } from 'react';
import { View, FlatList, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import AppContext from '../../context/AppContext'
import { get } from '../../libs/Http'
import CoinsItem from './CoinsItem'

const CoinsScreen = (props) => {
  const [loading, setLoading] = useState(true)

  const { state, listcoins } = useContext(AppContext)
  const { coins } = state

  useEffect(() => {
    async function getDataFetch() {
      const dataFetch = await get('tickers')
      listcoins(dataFetch.data)
      setLoading(false)
    }

    getDataFetch()
  }, [])

  const handlePress = () => {
    console.log(data)

    props.navigation.navigate('CoinDetail')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Coins Screennnn</Text>
      {
        loading
          ? <ActivityIndicator
            style={styles.loader}
            color="#fff"
            size="large" />
          : <FlatList
            data={coins}
            renderItem={({ item }) => (<CoinsItem item={item} />)} >
          </FlatList>
      }

      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>go to details
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "#fff",
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
