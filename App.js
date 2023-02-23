import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainLayout } from "./src/screens/MainLayout";
import CustomDrawer from "./src/navigation/CustomDrawer";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReucer from "./src/stores/rootReucer";
import { LogIn, SignUp } from "./src/screens";
import ForgotPassword from "./src/screens/Authentication/ForgotPassword";
import AuthContext from "./src/context/AuthContext";
import History from "./src/screens/History";
import { QueryClient, QueryClientProvider } from 'react-query'
import DeliveryDetails from "./src/screens/DeliveryDetails";
import PendingDelivery from "./src/screens/PendingDelivery";
import DropOff from "./src/screens/DropOff";

const queryClient = new QueryClient();

const Stack = createStackNavigator();
const store = createStore(
  rootReucer,
  applyMiddleware(thunk)
)

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthContext>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={'Home'}>
              <Stack.Screen name="LogIn" component={LogIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="Home" component={CustomDrawer} />
              <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
              <Stack.Screen name="PendingDelivery" component={PendingDelivery} />
              <Stack.Screen name="DropOff" component={DropOff} />
              <Stack.Screen name="History" component={History} />
              {/* <Stack.Screen name="HomeScreen" component={MainLayout} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

