import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import TextStyled from "../TextStyled/TextStyled";
import { googleImage, facebookImage } from "./../../../assets";

export default function Login({
    onPress,
    text,
    borderRadius,
    backgroundColor,
    paddingHorizontal,
    paddingVertical,
    marginVertical,
    width,
    height,
    imagen,
    borderWidth,
}) {
    return (
        <TouchableOpacity
            style={{
                borderRadius,
                backgroundColor,
                paddingHorizontal,
                paddingVertical,
                marginVertical,
                width,
                height,
                borderColor: "gray",
                borderWidth,
            }}
            onPress={onPress}
        >
            <View style={imagen ? styles.container : null}>
                {imagen && imagen.includes("google") && <Image source={googleImage} style={styles.image} />}
                {imagen && imagen.includes("facebook") && <Image source={facebookImage} style={styles.image} />}
                <TextStyled text={text} textAlign={"center"} fontSize={15}></TextStyled>
            </View>
        </TouchableOpacity>
    );
}

const styles = {
    image: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
};
