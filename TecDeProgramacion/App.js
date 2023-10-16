import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/authContext";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Account from "./src/screens/Account";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
