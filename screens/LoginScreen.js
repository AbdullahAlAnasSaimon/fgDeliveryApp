import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          // value={}
          // onChangeText={text =>}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          // value={}
          // onChangeText={text =>}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.buttonMiddleText}>OR</Text>
        <TouchableOpacity
          onPress={() => { }}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 1,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#84b840',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonOutline: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderColor: '#84b840',
    borderWidth: 1
  },
  buttonText:{
    color: '#fff',
    fontWeight: 700,
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#84b840',
    fontWeight: 700,
    fontSize: 16,
  },
})