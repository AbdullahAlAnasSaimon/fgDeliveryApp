import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import { SIZES, FONTS, COLORS } from '../../constants';
import { FormInput } from '../../components';
import icons from '../../constants/icons';
import { utils } from '../../utils';


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(false);

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
          onChange={(value) => {
            utils.validateEmail(value, setEmailError)
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

        <FormInput
          label={"Password"}
          secureTextEntry={!showPass}
          autoComplete="password"
          containerStyle={{
            marginTop: SIZES.radius
          }}
          onChange={(value) => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.gray
                }}
              />
            </TouchableOpacity>
          }
        />

      </View>
    </AuthLayout>
  )
}

export default LogIn;