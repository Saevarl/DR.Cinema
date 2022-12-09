import { View, Text, Image, Button, LayoutAnimation} from 'react-native';
import React, { useState } from 'react';
import  { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import VideoDropdown from '../videoDropdown';
import { setExpandedMovie } from '../../features/upcomingSlice';
import styles from './styles';



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
              <Text style={{
                fontSize: 16, fontFamily: 'Avenir', fontSize: 15, color: '#fff', paddingVertical:7
                }}>Sjá sýnishorn</Text>
            </TouchableOpacity>
            {selectedMovie === upcoming.id && <VideoDropdown trailer={trailer}/>}
          </View>
        )}
    }
  }  
  

  return (

      <View style={{marginTop:30, backgroundColor: '#0F4C75', borderRadius:100, borderBottomRightRadius:0}}>
        <Image source={{uri: upcoming.poster}}
                style={styles.backgroundImage}
                blurRadius={10}
        />
        <View style={styles.date}>
            <Text >{upcoming['release-dateIS']}</Text>
        </View>
        <View style={styles.title}> 
            <Text style={{fontFamily: 'Avenir', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>{upcoming.title}</Text>
        </View>
        <Image source={{uri: upcoming.poster}}
                style={styles.image}
        />
        <View style={styles.trailerContainer}>
            {watchTrailer()}
          </View>
      </View>

  )
}



export default UpcomingCard