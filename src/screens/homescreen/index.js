import { View, Text, TouchableHighlight } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate, selectToken } from '../../features/authenticationSlice';
import { useSelector } from 'react-redux';
import { USERNAME, PASSWORD } from '@env';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(selectToken)
    const [token, setToken] = useState('')

    const navigation = useNavigation(); 
   
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
      <TouchableHighlight
            onPress={() => navigation.navigate("Upcoming")}>
            <Text className="font-bold text-gray-500 p-2">Væntanlegar í bíó</Text>
        </TouchableHighlight>
    </View>
    
  )
}

export default HomeScreen