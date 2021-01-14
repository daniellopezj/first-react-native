
import { connect } from 'react-redux';
import React, { useEffect, useContext, useState, useReducer } from 'react';
import { View, FlatList, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { get } from '../../libs/Http'
import CoinsItem from './CoinsItem'
import Colors from '../../res/Colors'
import CoinsSearch from './CoinsSearch'
import { setList, setListSearch } from '../../actions/coinsActions'

const CoinsScreen = (props) => {
  const [loading, setLoading] = useState(true)
  console.log(props)
  const { coinsSearch } = props.coins
  // const { initialState } = useContext(AppContext)
  // const [listData, dispatch] = useReducer(coinsReducer, initialState);
  // console.log(listData)
  // del context destructuro los archivos donde van a
  // ir los eventos que van a cambiar el store de la aplicacion 
  // const { allCoins, coinsSearch } = initialState

  // const { globalState, dispatch } = useContext(AppContext);
  // const { coinsSearch } = globalState
  useEffect(() => {
    async function getDataFetch() {
      const dataFetch = await get('tickers')
      const { data } = dataFetch
      props.setList(data)
      props.setListSearch(data)
      // actionCoins.setListSearch(data)
      // dispatch({ type: ActionTypes.SET_LIST, payload: dataFetch.data })
      // dispatch({ type: ActionTypes.SET_SEARCH_LIST, payload: dataFetch.data })
      setLoading(false)
    }
    getDataFetch()
  }, [])

  const handlePress = (coinDetail) => {
    // props.navigation.navigate('CoinDetail', { coinDetail })
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

          :

          <FlatList
            data={coinsSearch}
            renderItem={({ item }) => (<CoinsItem key={item.id} item={item} onPress={() => handlePress(item)} />)} >
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


const mapStateToProps = ({ coins }) => {
  return { coins };
};

const mapDispatchToProps = {
  setList,
  setListSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsScreen);

// export default CoinsScreen;
