
import { StyleSheet } from 'react-native'
import Colors from '../../../res/Colors';

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: Colors.charade,
    },
    TextTitle: {
      fontSize: 16,
      color: Colors.white,
      fontWeight: "bold",
      textAlign: "center",
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginButtonSection: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginButton: {
      backgroundColor: Colors.picton,
      borderRadius: 15,
      margin: 20,
      height: 50,
      width: 200,
      minHeight: 35,
      justifyContent: "center",
      textAlignVertical: "center"
    },
    textButton: {
      color: Colors.white,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    },
  }
)

export default styles;