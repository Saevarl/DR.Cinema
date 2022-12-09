import {SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/header'
import InCinemaList from '../../components/inCinemaList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, selectIsLoading, startLoadingMovies } from '../../features/movieSlice'
import { authenticate, selectToken, selectTokenIsLoading, startLoadingToken } from '../../features/authenticationSlice'
import { selectIsLoadingCinemas, startLoadingCinemas, fetchCinemas } from '../../features/cinemaSlice'
import { USERNAME, PASSWORD } from '@env'
import { ActivityIndicator } from '@react-native-material/core'

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const moviesAreLoading = useSelector(selectIsLoading)
  const tokenIsLoading = useSelector(selectTokenIsLoading)
  const cinemasAreLoading = useSelector(selectIsLoadingCinemas)
  const accessToken = useSelector(selectToken)  
  
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])

useEffect(() => {
  const credentials = {
    username: `${USERNAME}`,
    password: `${PASSWORD}`
}
dispatch(startLoadingToken())
dispatch(authenticate(credentials))
}, [])

useEffect(() => {
if (accessToken) {
    dispatch(startLoadingMovies())
    dispatch(fetchMovies(accessToken))
    dispatch(startLoadingCinemas())
    dispatch(fetchCinemas(accessToken))
  }
}, [accessToken])


  return (
    <SafeAreaView 
              style={{backgroundColor: "#D3D0E3"}}
              className="flex-1">
      {
        moviesAreLoading || tokenIsLoading || cinemasAreLoading
        ?
        <View className="justify-center items-center">
          <ActivityIndicator
            className="self-center"
            size="large"
            color="#00000f"
          />
        </View>
        : 
        <>
          <Header />
      
          <ScrollView >
            <InCinemaList />
          </ScrollView>
        </>
        
      }
      
      
    </SafeAreaView>
  )
}

export default HomeScreen