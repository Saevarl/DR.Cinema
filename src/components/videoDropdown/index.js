import { View, StatusBar  } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import YoutubePlayer from 'react-native-youtube-iframe';
import getVideoId from 'get-video-id';



const VideoDropdown = ({trailer}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { id } = getVideoId(trailer);
    console.log(id)
    return (
        <View style={styles.container}>
            <YoutubePlayer 
                height={500}
                play={true}
                videoId={id}
                style={styles.video}
            />
        </View>
    )
}

export default VideoDropdown