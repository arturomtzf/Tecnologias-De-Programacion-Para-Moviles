import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerItem, createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/authContext";
import Account from "./src/screens/Account";
import { useAuthContext } from "./src/hooks/useAuthContext";
import Welcome from "./src/screens/Welcome";
import Signin from "./src/screens/Signin";
import EmptyScreen from "./src/screens/EmptyScreen";
import { useNavigation } from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: "#fff" }}
            activeColor={"#21b2b2"}
            inactiveColor={"#8a8a8a"}
            screenOptions={{ tabBarColor: "#fff" }}
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={26} /> }}
            />
            <Tab.Screen
                name="Wishlist"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="heart-multiple" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={EmptyScreen}
                options={{ tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" color={color} size={26} /> }}
            />
            <Tab.Screen
                name="Orders"
                component={EmptyScreen}
                options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="list-alt" color={color} size={22} /> }}
            />
            <Tab.Screen
                name="Profile"
                component={EmptyScreen}
                options={{ tabBarIcon: ({ color }) => <AntDesign name="user" color={color} size={26} /> }}
            />
        </Tab.Navigator>
    );
}

function CustomDrawerContent(props) {
    const navigation = useNavigation();
    const { handleLogOut: onLogOut } = useAuthContext();

    const handleLogOut = () => {
        try {
            onLogOut();
            navigation.navigate("Welcome");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => {
                    handleLogOut();
                }}
            />
        </DrawerContentScrollView>
    );
}

function HomeDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Main" component={HomeTabs} />
        </Drawer.Navigator>
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
                        <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
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
