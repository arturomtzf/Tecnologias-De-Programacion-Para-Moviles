import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";
import LoginHeader from "../components/Login/LoginHeader";
import LoginContent from "../components/Login/LoginContent";

export default function Login({ navigation, route }) {
    const { name } = route.params;
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Login Screen {name}</Text>
        </View>
    );
}
