import { View, Text } from 'react-native'
import React from 'react'
import selectSelectedMovie from '../../features/movieSlice'
import { useSelector } from 'react-redux'

const MovieDetail = ({movie}) => {


  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  )
}

export default MovieDetail