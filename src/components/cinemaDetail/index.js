import { View, Text, SafeAreaView, TouchableOpacity, TextComponent } from 'react-native'
import React from 'react'
import { selectSelectedCinema } from '../../features/cinemaSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { selectCinema } from '../../features/cinemaSlice'
import { ScrollView } from 'react-native-gesture-handler'
import { selectMovies } from '../../features/movieSlice'

const CinemaDetail = () => {
    let cinema = useSelector(selectSelectedCinema)
    const movies = useSelector(selectMovies)
    const dispatch = useDispatch()

    // for movie in movies and for showtime in showtimes, if showtimes includes id equal to cinema.id add to list
    const moviesAtCinema = movies.filter(movie => movie.showtimes.some(showtime => showtime.Id === cinema.id))   
    console.log(cinema.id, moviesAtCinema)
  
  return (
    <SafeAreaView
            style={{backgroundColor: "#D3D0E3"}}>
      <View className="flex-row justify-between">
        <TouchableOpacity 
                      onPress={() => dispatch(selectCinema(null))}
                      className="ml-4">
          <ChevronLeftIcon 
                      size={30}
                      color="gray"/>
        </TouchableOpacity>
        <TouchableOpacity
                      className="mr-4">
          <MagnifyingGlassIcon
                      color="gray"/>
        </TouchableOpacity>
          

      </View>
      <ScrollView >
      

      </ScrollView>
      
      
      <View>
        <View className="justify-center items-center">
          <View className=" border-b border-gray-400 w-9/12">
            <Text className="self-center text-2xl mb-2">{cinema.name}</Text>
          </View>
          <Text 
              className="font-light text-xs m-2 w-11/12"
              lineBreakMode=''

              >{cinema.description}</Text>
        <View className="flex-row">
            <Text className="font-bold text-xs m-2">
                  Staðsetning{"\n"}
                  <Text className="font-light">
                      {cinema.address}, {cinema.city} 
                  </Text>
            </Text>
            <Text className="font-bold text-xs m-2">
                  Sími{"\n"}
                  <Text className="font-light">
                      {cinema.phone} 
                  </Text>
            </Text>
            <Text className="font-bold text-xs m-2">
                  Vefsíða{"\n"}
                  <Text className="font-light">
                    {cinema.website}  
                  </Text>
            </Text>

        </View>
        </View>
        
      </View>
      

    </SafeAreaView>
  )
}

export default CinemaDetail