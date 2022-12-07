import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, loadToken, selectToken } from '../../features/authenticationSlice'
import { USERNAME, PASSWORD } from '@env'
import SearchHeader from '../../components/searchHeader'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Footer from '../../components/footer'
import { fetchMovies, selectMovies } from '../../features/movieSlice'
import MovieCard from '../../components/movieCard'
import { selectSearchByMovieTitle, selectSearchString } from '../../features/searchSlice'

const SearchScreen = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(selectToken)
    const navigation = useNavigation()
    const isSearchByMovieTitle = useSelector(selectSearchByMovieTitle)
    const searchTerm = useSelector(selectSearchString)
    const movies = useSelector(selectMovies)
    
    

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
        dispatch(authenticate(credentials))
      }, [])

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchMovies(accessToken))
        }
    }, [accessToken])

    const filteredMovies = movies.filter(movie => {
        if (isSearchByMovieTitle) {
            return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        } else {
            return movie.directors_abridged.some(director => director.name.toLowerCase().includes(searchTerm.toLowerCase())) || movie.actors_abridged.some(actor => actor.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
    })

    
    
    
  return (
    <SafeAreaView 
              style={{backgroundColor: "#D3D0E3"}}
              className="flex-1">
      <SearchHeader />
      
      
        <ScrollView style={{backgroundColor: "#D3D0E3"}}>
          {
          filteredMovies.map(movie => {
            return (
              <MovieCard movie={movie} />
            )
          }
          )
          
         
          }
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default SearchScreen