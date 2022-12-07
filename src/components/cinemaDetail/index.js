import { View, Text, SafeAreaView, TouchableOpacity, TextComponent, Linking } from 'react-native'
import React, { useState } from 'react'
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
    const [showMore, setShowMore] = useState(false)

    // loop through movies and find those that have showtimes at this cinema
    const moviesAtCinema = movies.filter(movie => {
        return movie.showtimes.some(showtime => showtime.cinema.id === cinema.id)
    })
    
    
    console.log(moviesAtCinema)
   
  
    


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
          <View className=" border-b border-green-600 w-9/12">
            <Text className="self-center text-2xl mb-2">{cinema.name}</Text>
          </View>
          <Text 
              className="font-light text-xs m-2 w-11/12"
              truncate={showMore ? false : true}
              numberOfLines={showMore ? 0 : 2}

              >{cinema.description}</Text>
          <TouchableOpacity
                      onPress={() => setShowMore(!showMore)}
                      className="mb-2">
            <Text className="font-light text-xs text-orange-500">
              {showMore ? "Sýna minna" : "Sýna meira"}
            </Text>
          </TouchableOpacity>
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
                  <Text className="font-light"
                        onPress={() => Linking.openURL()}>
                    {cinema.website}  
                  </Text>
            </Text>
         
        </View>
        <View>
            
         </View>

        </View>
        
      </View>
      {
                moviesAtCinema.map(movie => {
                    return (
                        <View className="flex-row">
                            <Text className="font-bold text-xs m-2">
                                {movie.title}
                            </Text>
                            {
                                movie.showtimes.map(showtime => {
                                    return (
                                        <View className="flex-row">
                                            <Text className="font-light text-xs m-2">
                                                {showtime.time}
                                            </Text>
                                            
                                        </View>
                                    )
                                })
                          
                            }
                        </View>
                    )
                })
            }

    </SafeAreaView>
  )
}

export default CinemaDetail