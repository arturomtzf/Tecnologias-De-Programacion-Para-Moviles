import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";

export default function Post({ profilePic, name, image, caption, likes }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likes);
    const like = () => {
        setIsLiked(!isLiked);
        isLiked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: profilePic }} style={styles.profilePic} />
                <Text style={styles.userName}>{name}</Text>
                <MaterialIcons name="verified" size={20} color="#0394f6" />
            </View>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.options}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => like()}>
                        {isLiked ? (
                            <AntDesign name="heart" size={28} color="red" />
                        ) : (
                            <AntDesign name="hearto" size={28} color="white" />
                        )}
                    </TouchableOpacity>
                    <AntDesign name="message1" size={28} color="white" />
                    <Feather name="send" size={28} color="white" />
                </View>
                <AntDesign name="save" size={28} color="white" />
            </View>
            <Text style={styles.likes}>
                Liked by <Text style={{ fontWeight: "800" }}>arturomtzf</Text> and {likesCount - 1} others
            </Text>
            <Text style={styles.caption}>
                <Text style={{ fontWeight: "800" }}>{name}</Text> {caption}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginTop: 8,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginRight: 10,
    },
    userName: {
        color: "white",
        fontWeight: "700",
        marginRight: 5,
    },
    image: {
        width: "100%",
        height: 450,
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        marginTop: 10,
    },
    left: {
        flexDirection: "row",
        width: 120,
        justifyContent: "space-between",
    },
    likes: {
        color: "white",
        marginLeft: 10,
    },
    caption: {
        color: "white",
        marginLeft: 10,
        marginVertical: 3,
    },
});
