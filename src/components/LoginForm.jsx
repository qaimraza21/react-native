import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleInput = () => {
        console.log('Email:', email);
        console.log('Password:', password);

        setEmail('');
        setPassword('');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Form</Text>
      <TextInput 
         placeholder='Email'
         style={styles.input}
         value={email}
         onChangeText={setEmail}
         keyboardType='email-address'
         autoCapitalize='none'
         placeholderTextColor='#999'
      />
      <TextInput 
         placeholder='Password'
         style={styles.input}
         value={password}
         onChangeText={setPassword}
         secureTextEntry
         placeholderTextColor='#999'
      />
      <TouchableOpacity  style={styles.button} onPress={handleInput}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#f0f0f0',
        
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default LoginForm