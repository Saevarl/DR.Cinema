import { View, Text, SafeAreaView, TouchableOpacity, TextComponent, Linking, Image } from 'react-native'
import React, { useState } from 'react'
import { selectSelectedCinema } from '../../features/cinemaSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { selectCinema } from '../../features/cinemaSlice'
import { ScrollView } from 'react-native-gesture-handler'
import { setSelectedMovie, selectSelectedMovie, selectMovies } from '../../features/movieSlice'
import MovieScreeningCard from '../movieScreeiningCard'
import GoBackHeader from '../goBackHeader'
import CinemaInfo from '../cinemaInfo'
import MovieDetail from '../movieDetail'

const CinemaDetail = () => {
    let cinema = useSelector(selectSelectedCinema)
    const movies = useSelector(selectMovies)
    const selectedMovie = useSelector(selectSelectedMovie)
    const dispatch = useDispatch()

    let moviesAtCinema = []
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i]
        let showtimes = movie.showtimes
        let showtimesAtCinema = []
        for (let j = 0; j < showtimes.length; j++) {
            let showtime = showtimes[j]
            if (showtime.cinema.id === cinema.id) {
                showtimesAtCinema.push(showtime)
            }
        }
        if (showtimesAtCinema.length > 0) {
            let movieAtCinema = {
                id: movie._id,
                title: movie.title,
                description: movie.description,
                year: movie.year,
                genres: movie.genres,
                poster: movie.poster,
                showtimes: showtimesAtCinema,
                imdbRating: movie.ratings.imdb,
                imdbId: movie.ids.imdb
            }
            moviesAtCinema.push(movieAtCinema)
        }
    }
   
    
    
  const goBackToCinemaList = () => {
    dispatch(selectCinema(null))
  }

  const goBackToCinemaDetail = () => {
    dispatch(setSelectedMovie(null))
  }
    
  


  return (
    <SafeAreaView
            style={{backgroundColor: "#D3D0E3"}}>
      
    {
      selectedMovie
      ?
      <>
        <GoBackHeader
                goBack={() => goBackToCinemaDetail()}/>

        <MovieDetail movie={selectedMovie}/>
      </>
      :
      <>
      <GoBackHeader 
              goBack={() => goBackToCinemaList()}/>
      
      <ScrollView >
      <View className=" border-b border-green-600 w-9/12 self-center">
        <Text className="self-center text-2xl mb-2">{cinema.name}</Text>
      </View>

        <View className="flex-col items-center justify-center">
          {
            moviesAtCinema.map(movie => {
              return (
                <MovieScreeningCard 
                        movie={movie}
                        key={movie.id}/>
              )})
          }
        </View>
        <CinemaInfo cinema={cinema}/>
      </ScrollView>
      </>
    }

      
    </SafeAreaView>
  )
}

export default CinemaDetail