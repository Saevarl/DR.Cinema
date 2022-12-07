import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MovieCard from '../movieCard'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovies, fetchMovies } from '../../features/movieSlice'
import { authenticate, selectToken } from '../../features/authenticationSlice'


const InCinemaList = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector(selectToken)
  const navigation = useNavigation()
  const movies = useSelector(selectMovies)

  useEffect(() => {
    if (movies === []){
      const credentials = {
        username: `${USERNAME}`,
        password: `${PASSWORD}`
    }
    dispatch(authenticate(credentials))
    }
      
    }, [])

  useEffect(() => {
    if (accessToken) {
          dispatch(fetchMovies(accessToken))
      }
  }, [accessToken])


  return (
    <View>
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} />
        )
      }
      )}
    </View>
  )
}

export default InCinemaList