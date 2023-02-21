import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import AuthLayout from './AuthLayout';
import { SIZES, FONTS, COLORS } from '../../constants';
import { CustomSwitch, FormInput, TextButton, TextIconButton } from '../../components';
import icons from '../../constants/icons';
import { utils } from '../../utils';
import { StateContext } from '../../context/AuthContext';


const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [saveMe, setSaveMe] = useState(false);
  const [showPass, setShowPass] = useState(false);
  
  const {userLogin} = useContext(StateContext);

  const handleLogIn = () => {
    userLogin(email, password)
      .then(result => {
        const user = result.user;
        console.log(user.email);
        if (user) {
          navigation.navigate("Home");
        }
      }).catch(err => Alert(err.message))
  }

  const isEnableLogIn = () => {
    return email != "" && password != ""
  }



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
          label={"Password"}
          secureTextEntry={!showPass}
          autoComplete="password"
          containerStyle={{
            marginTop: SIZES.radius
          }}
          onChange={(value) => {
            setPassword(value)
          }}
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

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between'
          }}
        >
          <CustomSwitch
            value={saveMe}
            onChange={(value) => setSaveMe(value)}
          />

          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4
            }}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot Password
          </Text>
        </View>
        <TextButton
          label="Log In"
          onPress={handleLogIn}
          disabled={isEnableLogIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableLogIn() ? COLORS.primary : COLORS.transparentPrimray
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
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: 3
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>

        <Text
        style={{
          textAlign: 'center',
          marginTop: SIZES.radius
        }}
        >OR</Text>
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            marginTop: SIZES.radius,
            backgroundColor: COLORS.lightGray2
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: null
          }}
          label="Continue With Google"
          labelStyle={{
            marginLeft: SIZES.radius
          }}
          onPress={() => console.log('google')}
        />
      </View>
    </AuthLayout>
  )
}

export default LogIn;