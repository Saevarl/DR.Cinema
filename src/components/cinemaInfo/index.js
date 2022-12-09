import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'

const CinemaInfo = ({cinema}) => {
    const [showMore, setShowMore] = useState(false)

  return (
    <View>
      <View className="justify-center items-center">
        <Text 
              className="font-light text-xs m-2 w-11/12"
              truncate={showMore ? false : true}
              numberOfLines={showMore ? 0 : 2}

              >{cinema.description}</Text>
        {
          cinema.description.length > 110
          ?
          <TouchableOpacity
                    onPress={() => setShowMore(!showMore)}
                    className="mb-2">
          <Text className="font-light text-xs text-orange-500">
            {showMore ? "Sýna minna" : "Sýna meira"}
          </Text>
        </TouchableOpacity>
        :
        <></>
        }
        
      <View className="flex-row">
          <Text className="font-bold text-xs m-2">
                Staðsetning{"\n"}
                <Text className="font-light">
                    {cinema.address}, {cinema.city} 
                </Text>
          </Text>
          <Text className="font-bold text-xs m-2">
                Sími{"\n"}
                <Text className="font-light">
                    {cinema.phone} 
                </Text>
          </Text>
          <Text className="font-bold text-xs m-2">
                Vefsíða{"\n"}
                <Text className="font-light"
                      onPress={() => Linking.openURL()}>
                  {cinema.website}  
                </Text>
          </Text>
      </View>
    </View>
  </View>
  )
}

export default CinemaInfo