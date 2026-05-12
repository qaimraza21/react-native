import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native/types_generated/index'

const OnPress = () => {
    const getName = (name)=>{
        console.log(name);
    };
  return (
    <View>
      <Text style={{ fontSize: 30}}>OnPress</Text>
      <Button 
        title='Press' 
        OnPress={() => getName('Qaim')}
      
      />
    </View>
  )
}

export default OnPress