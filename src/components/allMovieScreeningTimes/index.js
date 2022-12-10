import { View, Text, Linking } from 'react-native'
import React from 'react'
import { Chip } from '@react-native-material/core'
import { useSelector } from 'react-redux'
import { selectCinemas } from '../../features/cinemaSlice'

const AllMovieScreeningTimes = ({movie}) => {
    return (
    <View>
        <Text className="text-xl mb-1 self-center">Sýningartímar</Text>
        <Text className="text-xs font-light self-center mb-4">Veldu tíma til að kaupa miða</Text>
        {
            movie.showtimes.map((showtime, index) => {
                return (
                    <View 
                        className="space-y-2 pb-4"
                        key={index}>
                        <Text className="text-lg font-bold self-center">{showtime.cinema.name}</Text>
                        {
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
                        }
                    </View>
                )
            }
                )
            }
        
    </View>
  )
}

export default AllMovieScreeningTimes