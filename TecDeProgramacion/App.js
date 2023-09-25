import Constants from "expo-constants";
import { StyleSheet, View, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import CharacterInfo from "./src/screens/CharacterInfo";

// Tarea:  De la tarea que hicimos con los personajes de Rick and Morthy. Hacer una propiedad de ver personaje en cada card, y cuando le den click que los mnadne a una pantalla donde se muestre ***TODA*** la info del personaje.

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator initialRouteName="TheRichAndMorhyAPI">
                    <Stack.Screen name="TheRichAndMorhyAPI" component={Home} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Character" component={CharacterInfo} />
                </Stack.Navigator>
            </View>
            <StatusBar />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
