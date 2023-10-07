import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/authContext";
import Account from "./src/screens/Account";
import { useAuthContext } from "./src/hooks/useAuthContext";
import Welcome from "./src/screens/Welcome";
import Signin from "./src/screens/Signin";
import EmptyScreen from "./src/screens/EmptyScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Wishlist" component={EmptyScreen} />
            <Tab.Screen name="Shop" component={EmptyScreen} />
            <Tab.Screen name="Orders" component={EmptyScreen} />
            <Tab.Screen name="Profile" component={EmptyScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <View style={styles.container}>
                    <Stack.Navigator initialRouteName="Welcome">
                        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
                        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown: false}}/>
                    </Stack.Navigator>
                    <StatusBar style="auto" />
                </View>
            </NavigationContainer>
        </AuthContextProvider>
    );
}

const Layout = () => {
    const { user } = useAuthContext();

    if (!user) {
        return <Stack.Screen name="Login" component={Login} />;
    }

    return (
        <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // paddingTop: Constants.statusBarHeight,
    },
});
