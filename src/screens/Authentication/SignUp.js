import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { SIZES, FONTS, COLORS, icons } from '../../constants'
import AuthLayout from './AuthLayout'
import { FormInput, TextButton, TextIconButton } from '../../components'
import { utils } from '../../utils'
import { StateContext } from '../../context/AuthContext'

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { userSignUp } = useContext(StateContext);

  const handleSignUp = (data) => {
    userSignUp(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user.email);
        if (user) {
          navigation.navigate("Home");
        }
      }).catch(err => Alert(err.message))
  }

  const isEnableSignUp = () => {
    return email != "" && phoneNumber != "" && password != ""
  }

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

        <FormInput
          label="Contact Number"
          containerStyle={{
            marginTop: SIZES.radius
          }}
          onChange={(value) => {
            utils.validateContactNumber(value, setNumberError)
            setPhoneNumber(value)
          }}
          errorMsg={numberError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center'
              }}
            >
              <Image
                source={phoneNumber == "" || (phoneNumber != "" && numberError == "") ? icons.correct : icons.cancel}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: phoneNumber == "" ? COLORS.gray : (phoneNumber != "" && numberError == "") ? COLORS.green : COLORS.red
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
          onChange={(value) => {
            utils.validatePassword(value, setPasswordError)
            setPassword(value)
          }}
          errorMsg={passwordError}
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
        <TextButton
          label="Sign Up"
          disabled={isEnableSignUp() ? false : true}
          onPress={handleSignUp}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimray
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3
            }}
          >
            Already have an account?
          </Text>
          <TextButton
            label="Log In"
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: 3
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3
            }}
            onPress={() => navigation.navigate("LogIn")}
          />
        </View>
      </View>
    </AuthLayout>
  )
}

export default SignUp;