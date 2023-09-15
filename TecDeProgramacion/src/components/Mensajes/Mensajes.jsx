import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import MensajeComponent from "../MensajeComponent/MensajeComponent";

const MENSAJES = [
    {
        id: 1,
        name: "Jorge",
        message: "Hola, ¿cómo estás?",
        time: "10:00",
        image: "https://picsum.photos/150/250",
    },
    {
        id: 2,
        name: "Pablo",
        message: "Como vas con el examen?",
        time: "11:00",
        image: "https://picsum.photos/250/350",
    },
    {
        id: 3,
        name: "Luis",
        message: "Hola, ¿cómo estás?",
        time: "12:00",
        image: "https://picsum.photos/350/450",
    },
    {
        id: 4,
        name: "Jorge",
        message: "Hola, ¿cómo estás?",
        time: "10:00",
        image: "https://picsum.photos/450/550",
    },
];
export default function Mensajes() {
    return (
        <View>
            <ScrollView>
                {MENSAJES.map((mensaje) => {
                    return (
                        <MensajeComponent
                            key={mensaje.id}
                            name={mensaje.name}
                            message={mensaje.message}
                            time={mensaje.time}
                            image={mensaje.image}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
