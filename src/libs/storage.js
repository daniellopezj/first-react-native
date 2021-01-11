import AsyncStorage from '@react-native-community/async-storage'

export const postStore = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch (err) {
    console.log('storage post err', err)
    return false
  }
}

export const getStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (err) {
    console.log('storage  get err', err)
    throw Error(err)
  }
}

export const getAll = async (keys) => {
  try {
    return await AsyncStorage.multiGet(keys)
  } catch (err) {
    console.log('storage  getAll err', err)
    throw Error(err)
  }
}

export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys()
  } catch (err) {
    console.log('storage getAllKeys err', err)
    throw Error(err)
  }
}

export const removeStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    return true;
  } catch (err) {
    console.log('storage  remove err', err)
    return false;
  }
}