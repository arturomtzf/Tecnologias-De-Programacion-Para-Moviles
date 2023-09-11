import React from "react";
import { Image, StyleSheet } from "react-native";
import { profilePic } from "../../../assets";

function ProfilePicture() {
    return <Image source={profilePic} style={styles.imagen} />;
}

const styles = StyleSheet.create({
    imagen: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#f5f5f5",
    },
});

export default ProfilePicture;
