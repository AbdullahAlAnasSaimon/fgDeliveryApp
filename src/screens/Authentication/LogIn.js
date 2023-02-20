import { Text, View } from 'react-native'
import React from 'react'
import AuthLayout from './AuthLayout';

const LogIn = () => {
  return (
    <AuthLayout
      title={"Please Log In"}
      subtitle="Welcome back, You have been missed"
    >
      <View>
      </View>
    </AuthLayout>
  )
}

export default LogIn;