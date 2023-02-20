import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AuthLayout from './AuthLayout';
import { SIZES, FONTS, COLORS } from '../../constants'
import { FormInput } from '../../components'
import icons from '../../constants/icons';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  return (
    <AuthLayout
      title={"Please Log In"}
      subtitle="Welcome back, You have been missed"
    >
      <View
      style={{
        flex: 1,
        marginTop: SIZES.padding * 2
      }}>
        <FormInput
        label="Email"
        keyboardType='email-address'
        autoComplete='email'
        onChange={(value) => setEmail(value)}
        errorMsg={emailError}
        appendComponent={
          <View
          style={{
            justifyContent: 'center'
          }}
          >
            <Image 
            source={icons.correct}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.green
            }}
            />
          </View>
        }
        />
      </View>
    </AuthLayout>
  )
}

export default LogIn;