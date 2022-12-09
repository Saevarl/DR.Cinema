import { View, Text, Image, Button, LayoutAnimation} from 'react-native';
import React, { useState } from 'react';
import  { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import VideoDropdown from '../videoDropdown';
import { setExpandedMovie } from '../../features/upcomingSlice';
import styles from './styles';
//import fileType from 'react-native-file-type'




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
                fontSize: 16, fontFamily: 'Avenir', fontSize: 15, color: '#424874', paddingVertical:7
                }}>Sjá sýnishorn</Text>
            </TouchableOpacity>
            {selectedMovie === upcoming.id && <VideoDropdown trailer={trailer}/>}
          </View>
        )}
    }
  }  

  const getImage = () => {
    return (
      <Image source={{uri: upcoming.poster}}
              style={styles.image} 
      />
    )
  }

  // const checkImageURL = () => {
  //     fileType(upcoming.poster).then(res => {
  //       console.log(res)
  //       if (res === 'image/jpeg') {
  //         return getImage()
  //       } else {
  //         return null
  //       }
  //     }
  //   )
  // }

  //console.log(checkImageURL())
  
  return (

      <View style={{marginTop:30, backgroundColor: '#A6B1E1', borderRadius:100, borderBottomRightRadius:0}}>
        <Image source={{uri: upcoming.poster}}
                style={styles.backgroundImage}
                blurRadius={10}
        />
        <View style={styles.date}>
            <Text >{upcoming['release-dateIS']}</Text>
        </View>
        <View style={styles.title}> 
            <Text style={{fontFamily: 'Avenir', fontSize: 17, fontWeight: 'bold', color: 'orange' }}>{upcoming.title}</Text>
        </View>
        {getImage()}
        <View style={styles.trailerContainer}>
            {watchTrailer()}
          </View>
      </View>

  )
}



export default UpcomingCard