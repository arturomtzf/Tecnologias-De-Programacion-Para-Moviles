import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Iconos/Header";
import MainPart from "../components/Iconos/MainPart";
import SecondaryPart from "../components/Iconos/SecondaryPart";

function Iconos() {
    return (
        <View style={{backgroundColor: '#d56741'}}>
            <Header />
            <MainPart />
            <SecondaryPart />
        </View>
    );
}

export default Iconos;
