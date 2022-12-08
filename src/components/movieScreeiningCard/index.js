import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Chip } from "@react-native-material/core";

import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const MovieScreeningCard = ({movie}) => {
    console.log(movie)
  return (
    <View className="w-full m-2 p-2 pb-4 mx-2">
      <View className="flex-row pt-4 border-t border-gray-400">
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
      <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="flex-row">
            
        <View className="flex-row m-2">
            {
                movie.genres.map((genre) => {
                    return (
                        <Chip 
                            key={genre.id}
                            label={genre.Name}
                            variant="outlined"/>
                            
                    )
                })
            }


        </View>
        </ScrollView>
      <Image 
            source={{uri: movie.poster}}
            className="w-40 h-40 mt-2 mb-2 self-center"
      />
      <View className="ml-2 mb-2">
      <Text className="text-xl mb-2 self-center">Sýningartímar</Text>
      <View className="space-y-2">
      {
        movie.showtimes.map(showtime => {
        return (
        showtime.schedule.map((schedule, index) => {
            return (
            <Chip 
                className="font-bold"
                key={index}
                label={schedule.time}
                variant="outlined"/>
            
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

export default MovieScreeningCard



