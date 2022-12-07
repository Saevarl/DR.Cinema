import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View className="bg-gray-200 h-12 items-center justify-center">
      <View className="flex justify-center items-center">
      <View className="flex-row">
        <TouchableOpacity className="w-1/3">
          <Text className="text-center text-gray-500">Í Bío</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/3">
          <Text className="text-center text-gray-500">Kvikmyndahús</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/3">
          <Text className="text-center text-gray-500">Væntanlegt</Text>
        </TouchableOpacity>
      </View>
      
      </View>
    </View>
  )
}

export default Footer