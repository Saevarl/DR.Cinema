import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Chip } from '@react-native-material/core'
import { useSelector } from 'react-redux'
import { selectGenres } from '../../features/genreSlice'

const MovieGenres = ({movie}) => {
    const genres = useSelector(selectGenres)

    // for genre in movie.genres, if genre === number, replace it with the corresponding object from genres where genre === object.ID
    // else if each genre in movie.genres is an object, do nothing

    const fixedMovieGenres = movie.genres.map((genre) => {
        if (typeof genre === "number") {
            return genres.find((genreObject) => genreObject.ID === genre)
        } else {
            return genre
        }
    })


    

   
    
    




  return (
    
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="flex-row">
            
        <View className="flex-row m-2">
            {
               
                fixedMovieGenres.map((genre) => {
                    return (
                        <Chip 
                            key={genre.ID}
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