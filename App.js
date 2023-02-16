import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainLayout } from "./src/screens/MainLayout";
import CustomDrawer from "./src/navigation/CustomDrawer";
// import { createStoreHook } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux/es/exports";
import thunk from "redux-thunk";
import rootReucer from "./src/stores/rootReucer";


const Stack = createStackNavigator();
const store = createStore(
  rootReucer,
  applyMiddleware(thunk)
)

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={'Home'}
        >
          {/* <Stack.Screen options={{ headerShown: false }} name="LogIn" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} /> */}
          <Stack.Screen name="Home" component={CustomDrawer} />
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// })
