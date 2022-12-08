import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'

const GoBackHeader = ({goBack}) => {
  return (
    <View className="flex-row justify-between">
        <TouchableOpacity 
                      onPress={goBack}
                      className="ml-4">
          <ChevronLeftIcon 
                      size={30}
                      color="gray"/>
        </TouchableOpacity>
        <TouchableOpacity
                      className="mr-4">
          <MagnifyingGlassIcon
                      color="gray"/>
        </TouchableOpacity>
      </View>
  )
}

export default GoBackHeader