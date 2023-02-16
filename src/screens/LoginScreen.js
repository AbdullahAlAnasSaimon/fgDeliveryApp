import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react';
import { StateContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = () => {
  const { userLogin } = useContext(StateContext);
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userLogin(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user.email);
        if (user) {
          navigation.navigate("Home");
        }
      }).catch(err => Alert(err.message))
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View>
        <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 600 }}>Please Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          rules={{ required: "*Email is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={{ color: 'red', fontSize: 12 }}>{errors.email.message}</Text>}
        <TextInput
          placeholder='Password'
          // value={password}
          // onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
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
  buttonMiddleText: {
    marginTop: 10
  },
  buttonOutline: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderColor: '#84b840',
    borderWidth: 1
  },
  buttonText: {
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