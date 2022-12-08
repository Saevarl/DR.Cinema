import { View, Text, Image, Button, LayoutAnimation} from 'react-native';
import React, { useState } from 'react';
import  { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import VideoDropdown from '../videoDropdown';
import { setExpandedMovie } from '../../features/upcomingSlice';



const UpcomingCard = ({upcoming}) => {
  const selectedMovie = useSelector(state => state.upcoming.expandedMovie)
  const [layoutHeight, setLayoutHeight] = useState(0);
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const toggleSelected = () => {
    if (selectedMovie === null || selectedMovie !== upcoming.id) {
      updateLayout();
      dispatch(setExpandedMovie(upcoming.id))
    } else {
      dispatch(setExpandedMovie(null))
      updateLayout();
    }
  }

  const updateLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setLayoutHeight(layoutHeight === 0 ? 1 : 0);
  }

  const watchTrailer = () => {
    if (upcoming.trailers[0] !== undefined)  {
      if(upcoming.trailers[0].results[0] !== undefined){
        const trailer = upcoming.trailers[0].results[0].url
        return (
          <View>
            <TouchableOpacity onPress={toggleSelected}>
              <Text>Sjá sýnishorn</Text>
            </TouchableOpacity>
            {selectedMovie === upcoming.id && <VideoDropdown trailer={trailer}/>}
          </View>
        )}
    }
  }  
  

  return (

      <View>
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

  )
}



export default UpcomingCard