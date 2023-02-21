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
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding
        }}>
        <FormInput
          label="Email"
          keyboardType='email-address'
          autoComplete='email'
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value)
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center'
              }}
            >
              <Image
                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                }}
              />
            </View>
          }
        />
      </View>
    </AuthLayout>
  )
}

export default SignUp;