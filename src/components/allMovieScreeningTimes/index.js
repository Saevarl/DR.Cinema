import { View, Text, Linking } from 'react-native'
import React from 'react'
import { Chip } from '@react-native-material/core'

const AllMovieScreeningTimes = ({movie}) => {
    return (
    <View>
        <Text className="text-xl mb-1 self-center">Sýningartímar</Text>
        <Text className="text-xs font-light self-center mb-4">Veldu tíma til að kaupa miða</Text>
        {
            // for each showtime in movie.showtimes render cinema.name and every schedule.time
            movie.showtimes.map(showtime => {
                return (
                    <View className="space-y-2 pb-4">
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