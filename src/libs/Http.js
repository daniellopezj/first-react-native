import React from 'react'
const GLOBAL_URL = 'https://api.coinlore.net/api/'

export const get = async (url) => {
  try {
    let req = await fetch(`${GLOBAL_URL}${url}`)
    let json = await req.json()
    return json
  } catch (err) {
    console.log('http get method', err)
    throw Error(err)
  }
}

export const post = async (url, body) => {
  try {
    let req = await fetch(`${GLOBAL_URL}${url}`, {
      method: 'POST',
      body
    })
    let json = await req.json()
    return json
  } catch (err) {
    console.log('http post method', err)
    throw Error(err)
  }
}
  // return {
  //   post,
  //   get,
  // }
// }

// export default Http
