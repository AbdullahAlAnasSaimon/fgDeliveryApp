import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SIZES, FONTS, COLORS, icons } from '../../constants'
import AuthLayout from './AuthLayout'
import { FormInput, TextButton, TextIconButton } from '../../components'
import { utils } from '../../utils'

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+880");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <AuthLayout
    title="Getting Started"
    subtitle="Create an account to continue"
    titleContainerStyle={{
      marginTop: SIZES.radius
    }}
    >
      
    </AuthLayout>
  )
}

export default SignUp;