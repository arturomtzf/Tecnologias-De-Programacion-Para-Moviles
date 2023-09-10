import { StyleSheet, View, Image, Dimensions, TextInput } from "react-native";
import LoginHeader from "../components/Login/LoginHeader";
import LoginContent from "../components/Login/LoginContent";
import ParteArriba from "../components/Examen/ParteArriba";
import ParteAbajo from "../components/Examen/ParteAbajo";

export default function Login() {
    return (
        <View>
            <LoginHeader />
            <LoginContent />
            <ParteArriba />
        </View>
    );
}
