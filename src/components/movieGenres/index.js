import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Chip } from '@react-native-material/core'

const MovieGenres = ({movie}) => {
  return (
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
  )
}

export default MovieGenres