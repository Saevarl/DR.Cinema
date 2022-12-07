import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, FilmIcon, UserIcon, Bars3Icon  } from 'react-native-heroicons/solid'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchByMovieTitle, setSearchByMovieTitle, setSearchString } from '../../features/searchSlice'
import { useNavigation } from '@react-navigation/native'


const SearchHeader = () => {
  // if false then search by person
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const isSearchByMovieTitle = useSelector(selectSearchByMovieTitle)

  return (
    <View className="h-20">
       <View className="flex-row ">
       <TouchableOpacity
                className="ml-4 justify-center"
                onPress={() => navigation.openDrawer()}>
                <Bars3Icon
                        color={"orange"}
                />
        </TouchableOpacity>
       <View 
          style={{backgroundColor: "#EBE1F1"}}
          className="flex-row flex-1 mx-4 justify-center items-center w-auto h-8 rounded-full m-4">
                <View className="flex-row space-x-1 ml-3 justify-center items-center w-auto h-8 m-4">
                        <TouchableOpacity
                                onPress={() => dispatch(setSearchByMovieTitle(true))}>
                        <FilmIcon 
                                size={18} 
                                color={isSearchByMovieTitle ? "orange": "gray"} 
                                />
                        </TouchableOpacity>
                        <TouchableOpacity
                                onPress={() => dispatch(setSearchByMovieTitle(false))}>
                        <UserIcon 
                                size={18} 
                                color={!isSearchByMovieTitle ? "green": "gray"} />

                        </TouchableOpacity>
                 </View>

            
                <TextInput 
                        className="flex-1 "
                        placeholder={isSearchByMovieTitle ? "Leitaðu að mynd eða þáttum" : "Leitaðu að manneskju"}
                        placeholderTextSize={12}
                        selectionColor={isSearchByMovieTitle ? "orange" : "green"}
                        onChangeText={(text) => dispatch(setSearchString(text))}
                        />
                <TouchableOpacity className="mr-3">
                        <MagnifyingGlassIcon 
                                        className="h-10 w-10" 
                                        color="gray"
                                        />
                </TouchableOpacity>
       </View>
       </View>
    </View>
  )
}

export default SearchHeader