import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { homeImage } from "../../assets";

const HomeScreen = ({ navigation }) => {
    // console.log(navigation);
    const { canGoBack, goBack } = navigation;
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>Play And Win!</Text>
            <Text style={styles.txtChiqui}>Game for everyone who likes to try luck at guessing numbers.</Text>
            <Image style={styles.image} source={homeImage} />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Login", { name: "234,006,900" });
                }}
                style={styles.button}
            >
                <Text style={styles.txtInfo}>Get Started</Text>
            </TouchableOpacity>
            {/* <Button
        onPress={() => navigation.goBack()}
        title="Go back"
        disabled={!canGoBack()}
      /> */}
        </View>
    );
};

const styles = new StyleSheet.create({
    container: {
        backgroundColor: "#006e48",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#f96e3f",
        padding: 10,
        borderRadius: 30,
    },
    image: {
        width: 300,
        height: 300,
        marginVertical: 40,
    },
    txtTitle: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
    },
    txtInfo: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    txtChiqui: {
        fontSize: 17,
        color: "#fff",
        textAlign: "center",
        marginHorizontal: 20,
        marginVertical: 10,
    },
});

export default HomeScreen;
