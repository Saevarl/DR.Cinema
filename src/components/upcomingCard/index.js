import { View, Text, Image, Linking } from 'react-native';
import React from 'react';
import  { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import upcomingSlice from '../../features/upcomingSlice';
import { useDispatch } from 'react-redux';
import { selectUpcoming } from '../../features/upcomingSlice';

const UpcomingCard = ({upcoming}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const watchTrailer = () => {
    if (upcoming.trailers[0] !== undefined)  {
      if(upcoming.trailers[0].results[0] !== undefined){
        return (
          <TouchableOpacity
          onPress={() => Linking.openURL(upcoming.trailers[0].results[0].url)}>
            <Text>Sjá sýnishorn</Text>
          </TouchableOpacity>
        )}
    }
  }

  return (
    <View className="border-b m-2 bg-gray-100">
      <View className="flex-row w-full h-20">
        <Image source={{uri: upcoming.poster}}
                className="w-20 h-20"
        />
        <View> 
            <Text className="ml-1 p-1">{upcoming.title}</Text>
            <Text className="ml-1 p-1">{upcoming['release-dateIS']}</Text>
            <View>
              {watchTrailer()}
            </View>
        </View>
      </View>
    </View>
  )
}

export default UpcomingCard