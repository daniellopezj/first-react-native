import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles/StylesLogin'
// import useAuthState from './../../hooks/('

const AuthLogin = () => {

  // const { state, Login } = useContext(useAuthState)

  const handleLogin = () => {
    // Login('prueba')
    console.log('prueba')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}> CriptoTracker </Text>

      <View style={styles.loginButtonSection}>
        <Pressable style={styles.loginButton} onPress={handleLogin} >
          <Text style={styles.textButton}> Ingresar </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default AuthLogin
