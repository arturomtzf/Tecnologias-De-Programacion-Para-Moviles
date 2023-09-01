import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

export const Person = ({name, lastName, index, imagen}) => {
    return (
        <TouchableOpacity style={{ borderWidth: 1, borderColor: index % 2 === 0 ? "red" : "blue" }}>
            <Image source={'https://picsum.photos/200'}/>
            <Text style={{ fontSize: 40 }}>{name}</Text>
            <Text style={{ fontSize: 40 }}>{lastName}</Text>
        </TouchableOpacity>
    );
};
