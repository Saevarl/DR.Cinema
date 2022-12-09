import { View, Text } from 'react-native'
import React from 'react'

const Cast = ({movie}) => {
  return (
    <View className="flex-row justify-between space-x-5">
      <View className="mb-2">
          <Text className="font-bold">Leikstjórn</Text>
          {
            movie.directors.map((director, index) => {
              return (
                <Text key={index} className="text-xs">{director.name}</Text>
              )
            })
          }
        </View>
        <View className="mb-3">
          <Text className="font-bold">Leikarar</Text>
          {
            movie.actors.map((actor, index) => {
              return (
                <Text key={index} className="text-xs">{actor.name}</Text>
              )
            })
          }
        </View>
      </View>
  )
}

export default Cast