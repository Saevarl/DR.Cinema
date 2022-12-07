import { View, Text, Linking } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import cinemaSlice from '../../features/cinemaSlice'
import { useNavigation } from '@react-navigation/native'
import { selectCinema } from '../../features/cinemaSlice'
import { useDispatch } from 'react-redux'

const CinemaCard = ({cinema}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    let website = cinema.website
    if (website.includes('www.')) {
        website = website.replace('www.', 'https://')
    } else {
        website = `https://${website}`
    }

    
    return (
    <View className="mx-2 w-auto border-b border-gray-400 h-20 justify-center items-center">
      <TouchableOpacity
                    onPress={() => dispatch(selectCinema(cinema))}>
      <Text className="self-center text-2xl mb-2">{cinema.name}</Text>
      <TouchableOpacity
                    className="self-center"
                    onPress={() => Linking.openURL(`${website}`)}>
        <Text className="font-light">{cinema.website}</Text>
      </TouchableOpacity>

      </TouchableOpacity>
      
    </View>
  )
}

export default CinemaCard