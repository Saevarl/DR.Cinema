import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../../features/authenticationSlice'
import { selectToken } from '../../features/authenticationSlice'
import { useSelector } from 'react-redux'
import { USERNAME, PASSWORD } from '@env'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(selectToken)
    const [token, setToken] = useState('')
   
    useEffect(() => {
        const credentials = {
            username: `${USERNAME}`,
            password: `${PASSWORD}`
        }
        console.log("CREDENTIALS", credentials)
        dispatch(authenticate(credentials))

            
    }, [])

  
  
    return (
    <View>
      <Text>TOKEN {token}</Text>
    </View>
  )
}

export default HomeScreen