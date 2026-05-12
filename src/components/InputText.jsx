import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [userName, setUserName] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>InputText</Text>
      <Text style={{ fontSize: 30 }}>User Name: {userName}</Text>

      <TextInput 
        style={{fontSize: 30, borderWidth:2, margin:10, padding:10}}
        value={userName}
        placeholder='Enter Username'
        onChangeText={(text) => setUserName(text)}
      />

      <Button 
        title='Clear'
        onPress={() => setUserName('')}
      />

    </View>
  )
}

export default InputText