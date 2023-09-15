import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import StoryFriends from "../components/StoryFriends/StoryFriends";
import Options from "../components/Options/Options";
import Mensajes from "../components/Mensajes/Mensajes";
import BottomButton from "../components/BottomButton/BottomButton";

export default function Messenger() {
    return (
        <View>
            <Header />
            <StoryFriends />
            <Options />
            <Mensajes />
            <BottomButton />
        </View>
    );
}

const styles = StyleSheet.create({});
