import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Touchable, Text, TouchableOpacity } from "react-native";
import { StyledText } from "./src/components/StyledText";
import { StyledButton } from "./src/components/StyledButton";

export default function App() {
    const [buttonColor, setButtonColor] = useState("#841584");

    const changeButtonColor = () => {
        if (buttonColor === "#841584") {
            setButtonColor("#888888");
        } else {
            setButtonColor("#841584");
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: buttonColor }]}>
            <StyledText text="Arturo Martinez Fuentes" fontSize={25} />
            <StyledButton text="Soy Un Boton" functionBoton={changeButtonColor} buttonColor={buttonColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
