import React, { useState } from 'react'
import { TextInput, Platform, StyleSheet, View } from 'react-native'
import Colors from '../../res/Colors'


const CoinsSearch = ({ onchange }) => {

  const [query, setQuery] = useState('')

  handleText = (queryInput) => {
    setQuery(queryInput)
    onchange(queryInput)
  }

  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS == 'ios' ?
            styles.textInputIOS :
            styles.textInputAndroid
        ]}
        onChangeText={handleText}
        value={query}
        placeholder="Search coin"
        placeholderTextColor="#fff" />
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: Colors.charade,
    },
    textInput: {
      height: 46,
      backgroundColor: Colors.charade,
      color: "white",
      paddingLeft: 16
    },
    textInputAndroid: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.zircon
    },
    textInputIOS: {
      margin: 8,
      borderRadius: 8
    }
  }
)

export default CoinsSearch
