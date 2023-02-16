import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react';
import { StateContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const SignUpScreen = () => {
  const { userSignUp } = useContext(StateContext);
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userSignUp(data.email, data.password)
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
        <Controller
          control={control}
          name="password"
          rules={{ required: "*Password is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.password && <Text style={{ color: 'red', fontSize: 12 }}>{errors.password.message}</Text>}
        <Controller
          control={control}
          name="confirmPassword"
          rules={{ required: "*Confirm your Password" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.confirmPassword && <Text style={{ color: 'red', fontSize: 12 }}>{errors.confirmPassword.message}</Text>}
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

export default SignUpScreen

const styles = StyleSheet.create({})