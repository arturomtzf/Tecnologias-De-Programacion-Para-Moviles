import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { Banner } from "../../assets";

export default function BannerComp({ imagen }) {
    return (
        <View>
            <Image source={Banner} style={styles.imagenBanner} />
        </View>
    );
}

const styles = StyleSheet.create({
    imagenBanner: {
        // width: "100%",
        height: 150,
        borderRadius: 10,
        marginTop: 10,
    },
});
