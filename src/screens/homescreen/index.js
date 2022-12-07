import {SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/header'
import InCinemaList from '../../components/inCinemaList'

const HomeScreen = () => {
  const navigation = useNavigation()
  
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
}, [])



  return (
    <SafeAreaView 
              style={{backgroundColor: "#D3D0E3"}}
              className="flex-1">
      <Header />
      
        <ScrollView >
          <InCinemaList />
          
          
         
          
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default HomeScreen