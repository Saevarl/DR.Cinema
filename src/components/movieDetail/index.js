import { View, Text, Image, Linking } from 'react-native'
import React from 'react'
import selectSelectedMovie from '../../features/movieSlice'
import { useSelector } from 'react-redux'
import { Chip } from '@react-native-material/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Cast from '../cast'
import MovieGenres from '../movieGenres'

const MovieDetail = ({movie}) => {


  return (
    <View className="h-screen">
      <View className="flex-row">
      <Text className="flex-1 text-xl ml-2 font-bold">{movie.title}<Text className="text-xs font-light">({movie.year})</Text></Text>
      <TouchableOpacity
                    onPress={() => Linking.openURL(`https://www.imdb.com/title/tt${movie.imdbId}`)}
                    className="flex-row justify-center items-center">
            <Image 
                className="w-5 h-3 mt-1 mr-1"
                source={require("../../resources/IMDB_Logo.png")}/>
            <Text className="mr-2 mt-1 font-light text-xs">{movie.imdbRating}</Text>
        </TouchableOpacity>
    </View>
    <View className="flex-row m-2">
       <Text className="text-xs font-bold">Lengd</Text>
      <Text className="text-xs"> {movie.duration} mín</Text>
      </View> 
    <View className="m-2 items-center justify-center">
      <Image 
          source={{uri: movie.poster}}
          className="w-40 h-40 mt-2 mb-2"
        />
      <MovieGenres movie={movie}/>
      <Text className="font-light text-xs m-1">Söguþráður</Text>
      <Text className="text-xs mb-2 mx-1">{movie.plot}</Text> 
      <Cast movie={movie}/>
      <Text className="text-xl mb-2 self-center">Sýningartímar</Text>
      <View className="space-y-2 pb-4">
      {
        movie.showtimes.map(showtime => {
        return (
        showtime.schedule.map((schedule, index) => {
            return (
            <Chip 
                className="font-bold"
                key={index}
                label={schedule.time}
                variant="outlined"
                onPress={() => Linking.openURL(`${schedule.purchase_url}`)}/>
            
            
            )
        })
        )
        })
    }
      </View>
      </View>

    </View>
    
  )
}

export default MovieDetail