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
import Explore from "./src/screens/Explore";
import Favorites from "./src/screens/Favorites";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

var color = "gray";
export default function App() {
    const size = 34;
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <View style={styles.container}>
                    <Tab.Navigator barStyle={{ height: 70, backgroundColor: "#201e2b" }}>
                        <Tab.Screen
                            name="Home"
                            component={Home}
                            options={{
                                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={24} />,
                            }}
                        />
                        <Tab.Screen
                            name="Explore"
                            component={Explore}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="magnify" color={color} size={24} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Add"
                            component={EmptyScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <View style={{padding: 10, backgroundColor: "orange"}}>
                                        <MaterialCommunityIcons name="plus" color="white" size={24} />
                                    </View>
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Favorites"
                            component={Favorites}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <View>
                                        <MaterialCommunityIcons name="heart" color={color} size={24} />
                                    </View>
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Profile"
                            component={EmptyScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={24} />
                                ),
                            }}
                        />
                    </Tab.Navigator>

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
