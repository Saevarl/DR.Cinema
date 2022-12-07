import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/header'
import { selectToken } from '../../features/authenticationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectCinemas, fetchCinemas } from '../../features/cinemaSlice'

const CinemaListScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const cinemas = useSelector(selectCinemas)

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  useEffect(() => {
    dispatch(fetchCinemas(token))
  }, [])


console.log(cinemas)
  return (
    <SafeAreaView 
              style={{backgroundColor: "#D3D0E3"}}
              className="flex-1">
      <Header />
      
        <ScrollView >
          
         {/*map over cinemas with id and render name */}
          {cinemas.map(cinema => {
            return (
              <View key={cinema.id}>
                <Text>{cinema.name}</Text>
              </View>
            )
          })}
        
          
         
          
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default CinemaListScreen