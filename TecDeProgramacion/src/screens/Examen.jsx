import React from "react";
import { View } from "react-native";
import ParteArriba from "../components/Examen/ParteArriba";
import ParteAbajo from "../components/Examen/ParteAbajo";

export default function Examen() {
    return (
        <View>
            <ParteArriba />
            <ParteAbajo />
        </View>
    );
}
