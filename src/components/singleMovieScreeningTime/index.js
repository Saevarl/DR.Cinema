import { View, Text } from 'react-native'
import React from 'react'
import { Chip } from '@react-native-material/core'

const SingleMovieScreeiningTime = ({movie}) => {
  return (
    <View>
      <Text className="text-xl mb-1 self-center">Sýningartímar</Text>
      <Text className="text-xs font-light self-center mb-4">Veldu tíma til að kaupa miða</Text>
        <View className="space-y-2 pb-4">
          {
            movie.showtimes.map(showtime => {
            return (
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
            )})
          }
        </View>
    </View>
  )
}

export default SingleMovieScreeiningTime