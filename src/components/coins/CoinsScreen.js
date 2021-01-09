
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const CoinsScreen = (props) => {

  const handlePress = () => {
    props.navigation.navigate('CoinDetail')
    console.log('go to details', props)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Coins Screennnn</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>go to detail
        </Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "blue",
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
    btnText: {
      color: "#fff",
      textAlign: "center"
    }
  }

)
export default CoinsScreen;
