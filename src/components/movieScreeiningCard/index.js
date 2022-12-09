import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Chip } from "@react-native-material/core";
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setSelectedMovie } from '../../features/movieSlice';
import Cast from '../cast';
import MovieGenres from '../movieGenres';
import SingleMovieScreeiningTime from '../singleMovieScreeningTime';

const MovieScreeningCard = ({movie}) => {
    const dispatch = useDispatch()

    

  return (
    <TouchableOpacity 
                className="w-full m-2 p-1 pb-4 mx-2 "
                onPress={() => dispatch(setSelectedMovie(movie))}>
      <View className="flex-row">
        <Text className="flex-1 text-xl font-bold">{movie.title}<Text className="text-xs font-light">({movie.year})</Text></Text>
        <TouchableOpacity
                    onPress={() => Linking.openURL(`https://www.imdb.com/title/tt${movie.imdbId}`)}
                    className="flex-row justify-center items-center">
            <Image 
                className="w-5 h-3 mt-1 mr-1"
                source={require("../../resources/IMDB_Logo.png")}/>
            <Text className="mr-2 mt-1 font-light text-xs">{movie.imdbRating}</Text>
        </TouchableOpacity>
      </View>
     
      <MovieGenres movie={movie}/>
        
      <View className="m-2 items-center justify-center">

      <Image 
            source={{uri: movie.poster}}
            className="w-40 h-40 mt-2 mb-2 self-center"
      />
      
      <View className="ml-2 mb-2">
      <Cast movie={movie}/>
        </View>
      </View>
      
    </TouchableOpacity>
  )
}

export default MovieScreeningCard



