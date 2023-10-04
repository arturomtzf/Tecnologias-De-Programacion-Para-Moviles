import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

import MyCards from "./src/screens/MyCards";
import Balance from "./src/screens/Balance";
import Send from "./src/screens/Send";
import AppContextProvider from "./src/context/AppContext";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <AppContextProvider>
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Send" // ruta inicial
                        barStyle={{ height: 70, backgroundColor: "#000" }} // estilos de la barra de navegacion
                        activeColor="#fff" // color de los iconos activos
                        inactiveColor="#3e2465" // color de los iconos inactivos
                        labeled={true} // muestra el texto de los iconos
                        shifting={true} // oculta los textos de los iconos y aparecen al hacer click
                        backBehavior="history" // comportamiento del boton de atras
                    >
                        <Tab.Screen
                            name="MyCards"
                            component={MyCards} // componente a renderizar
                            options={{
                                tabBarLabel: "My Cards", //Texto que aparece debajo del icono
                                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />, // renderizar icono
                            }}
                        />
                        <Tab.Screen
                            name="Balance"
                            component={Balance}
                            options={{
                                tabBarLabel: "Balance",
                                tabBarIcon: ({ color }) => <FontAwesome name="balance-scale" size={24} color={color} />,
                            }}
                        />
                        <Tab.Screen
                            name="Send"
                            component={Send}
                            options={{
                                tabBarLabel: "Send",
                                tabBarIcon: ({ color }) => <Feather name="send" size={24} color={color} />,
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </AppContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // marginTop: Constants.statusBarHeight,
    },
});
