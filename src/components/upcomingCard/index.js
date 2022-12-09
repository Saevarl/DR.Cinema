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
                fontSize: 16, fontFamily: 'Avenir', fontSize: 15, color: '#424874', paddingVertical:7
                }}>Sjá sýnishorn</Text>
            </TouchableOpacity>
            {selectedMovie === upcoming.id && <VideoDropdown trailer={trailer}/>}
          </View>
        )}
    }
  }  

  //get the image from the API, if it doesn't exist, use a placeholder image
  console.log(upcoming.omdb)

  const posters = upcoming.omdb.map((movie) => {
    console.log(movie.Poster)
      return movie.Poster
  })
  console.log(posters[0])

  const getImage = () => {
    if (posters[0] !== undefined || posters ==! null) {
    return (
      <Image 
        source={{uri: upcoming.poster}}
        style={styles.image}
        />
    )
    } else {
      return (
        <Image source={{uri: 'https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg?w=1380'}}
              style={styles.image}
      />
      )
    }
  }

  const getBackgroundImage = () => {
    if (posters[0] !== undefined) {
    return (
      <Image 
        source={{uri: upcoming.poster}}
        style={styles.backgroundImage}
        blurRadius={10}
        />
    )
    } else {
      return (
        <Image source={{uri: 'https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg?w=1380'}}
              style={styles.backgroundImage}
              blurRadius={10}
      />
      )
    }
  }
    return (

      <View style={{marginTop:30, backgroundColor: '#A6B1E1', borderRadius:100, borderBottomRightRadius:0}}>
        {getBackgroundImage()}
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