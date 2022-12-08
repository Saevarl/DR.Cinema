import { View, Text, Image } from 'react-native'
import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <View className="border-b m-2 bg-gray-100">
      <View className="flex-row w-full h-20">
        <Image source={{uri: movie.poster}}
                className="w-20 h-20"
        />
        <View> 
            <Text className="ml-1 p-1">{movie.title}</Text>
        </View>
      </View>
    </View>
  )
}

export default MovieCard