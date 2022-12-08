import { View, Text, Image, TouchableHighlight, TouchableOpacity, Linking } from 'react-native'

import React from 'react'

const MovieScreeningCard = ({movie}) => {
    console.log(movie)
  return (
    <View className="bg-slate-200 w-full m-2 mx-2">
      <View className="flex-row">
        <Text className="flex-1 text-xl font-bold">{movie.title}</Text>
        <TouchableOpacity 
                    onPress={() => Linking.openURL(`https://www.imdb.com/title/tt${movie.imdbId}`)}
                    className="flex-row justify-center items-center">
            <Image 
                className="w-5 h-3 mt-1 mr-1"
                source={require("../../resources/IMDB_Logo.png")}/>
            <Text className="mr-2 mt-1 font-light text-xs">{movie.imdbRating}</Text>
        </TouchableOpacity>
      </View>
      <Image 
            classname="w-20 h-20"
            source={{uri: movie.poster}}
      />
      
      {
        movie.showtimes.map(showtime => {
        return (
        showtime.schedule.map((schedule, index) => {
            return (
            <Text 
                className="m-2"
                key={index}>
                {schedule.time}
            </Text>
            )
        })
        )
        })
  }
    </View>
  )
}

export default MovieScreeningCard



