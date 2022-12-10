import {SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, selectIsLoading, startLoadingMovies, selectMovies, updateMovies } from '../../features/movieSlice'
import { authenticate, selectToken, selectTokenIsLoading, startLoadingToken } from '../../features/authenticationSlice'
import { selectIsLoadingCinemas, startLoadingCinemas, fetchCinemas, selectCinemas } from '../../features/cinemaSlice'
import { fetchGenres, startLoadingGenres, selectGenresLoading } from '../../features/genreSlice'
import { USERNAME, PASSWORD } from '@env'
import { ActivityIndicator } from '@react-native-material/core'
import MovieScreeningCard from '../../components/movieScreeiningCard'
import AllMovieScreeningTimes from '../../components/allMovieScreeningTimes'
import * as movieService from '../../services/movieService'


const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const moviesAreLoading = useSelector(selectIsLoading)
  const tokenIsLoading = useSelector(selectTokenIsLoading)
  const cinemasAreLoading = useSelector(selectIsLoadingCinemas)
  const accessToken = useSelector(selectToken)  
  const movies = useSelector(selectMovies)
  const genresAreLoading = useSelector(selectGenresLoading)
  const cinemas = useSelector(selectCinemas)
  
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
      dispatch(startLoadingCinemas())
      dispatch(fetchCinemas(accessToken))
    
      dispatch(startLoadingMovies())
      dispatch(fetchMovies(accessToken))
      
      dispatch(startLoadingGenres())
      dispatch(fetchGenres(accessToken))
    }
  }, [accessToken])







    

  return (
    <SafeAreaView 
              style={{backgroundColor: "#D3D0E3"}}
              className="flex-1">
      {
        moviesAreLoading || tokenIsLoading || cinemasAreLoading || genresAreLoading
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
          <Text className="text-2xl self-center m-2">Í Bíó</Text>

          <ScrollView >
            {
              movies.map((movie) => {
                return (
                  <View
                      key={movie.id}>
                  <MovieScreeningCard 
                                  movie={movie}
                                  />
                  <AllMovieScreeningTimes 
                                  movie={movie}
                                  />
                  </View>
                  
                )
              })
            }
          </ScrollView>
        </>
        
      }
      
      
    </SafeAreaView>
  )
}

export default HomeScreen