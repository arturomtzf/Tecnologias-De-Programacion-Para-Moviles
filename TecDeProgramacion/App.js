import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home">
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Login" component={Login} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#000",
    },
});
