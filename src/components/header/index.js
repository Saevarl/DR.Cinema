import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, Bars3Icon } from 'react-native-heroicons/solid'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
  return (
    <View className="h-10 "
            style={{backgroundColor: "#D3D0E3 "}}>
       <View className="flex-row h-full w-full justify-between items-center">
            <TouchableOpacity 
                        className="ml-4"
                        onPress={() => navigation.openDrawer()}>
                <Bars3Icon 
                        color={"orange"}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                            className="mr-4"
                            onPress={() => navigation.navigate("Leita")}>
                <MagnifyingGlassIcon
                                color="gray"
                                />
            </TouchableOpacity>
            
                
       </View>
    </View>
  )
}

export default Header