import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/header'
import { selectToken } from '../../features/authenticationSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectCinemas, fetchCinemas, selectSelectedCinema } from '../../features/cinemaSlice'
import CinemaCard from '../../components/cinemaCard'
import CinemaDetail from '../../components/cinemaDetail'

const CinemaListScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const cinemas = useSelector(selectCinemas)
  const selectedCinema = useSelector(selectSelectedCinema)

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  useEffect(() => {
    dispatch(fetchCinemas(token))
  }, [])


  return (
    <>
    {
      selectedCinema
      ?
      <CinemaDetail cinema={selectedCinema} />
      :   
      <SafeAreaView 
      style={{backgroundColor: "#D3D0E3"}}
      className="flex-1">
        <Header />

        <ScrollView >

          {cinemas.map(cinema => {
          return (
          <View key={cinema.id}>
            <CinemaCard cinema={cinema} />

          </View>
          )
          })}




      </ScrollView>

      </SafeAreaView>
      
    
    
  
  }
  </>
  )
}

export default CinemaListScreen