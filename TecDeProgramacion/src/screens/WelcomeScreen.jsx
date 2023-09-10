import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Card from "../components/Card";
import SymptomCard from "../components/SymptomCard";
import Therapist from "../components/Therapist";
import BottomButton from "../components/BottomButton";

const WelcomeScreen = () => {
    const IMAGE = "https://shmector.com/_ph/6/907397949.png";
    const THERAPISTS = [
        {
            id: 1,
            image: IMAGE,
            name: "Dr. Alice Johnson",
            job: "Physiotherapist",
            rate: 5.0,
        },
        {
            id: 2,
            image: IMAGE,
            name: "Dr. Mark Smith",
            job: "Therapist",
            rate: 3.5,
        },
    ];

    const CARD = [
        {
            id: 1,
            isDarkBlue: true,
            text: "Start training",
            iconName: "hdd",
            iconType: "AntDesign",
        },
        {
            id: 2,
            isDarkBlue: false,
            text: "Start training",
            iconName: "hdd",
            iconType: "AntDesign",
        },
        {
            id: 3,
            isDarkBlue: true,
            text: "Start training",
            iconName: "hdd",
            iconType: "AntDesign",
        },
        {
            id: 4,
            isDarkBlue: false,
            text: "Start training",
            iconName: "hdd",
            iconType: "AntDesign",
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="notifications-outline" size={30} color="#3764c2" />
                <Image
                    style={styles.headerImage}
                    source={{
                        uri: IMAGE,
                    }}
                />
            </View>
            <Text style={styles.titleText}>
                <Text style={{ color: "#c1c0c4" }}>Hello,</Text>
                <Text style={{ color: "#2b3941" }}>Chris 👋</Text>
            </Text>
            <ScrollView style={{ marginBottom: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                {CARD.map((card) => (
                    <Card
                        key={card.id}
                        isDarkBlue={card.isDarkBlue}
                        text={card.text}
                        iconName={card.iconName}
                        iconType={card.iconType}
                    />
                ))}
            </ScrollView>
            <Text style={styles.textHeader}>What are your symptoms?</Text>
            <ScrollView
                // style={styles.symptomsContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <SymptomCard symptom="none" />
                <SymptomCard symptom="fever" />
                <SymptomCard symptom="sneeze" />
                <SymptomCard symptom="none" />
            </ScrollView>
            <View style={styles.therapistTitle}>
                <Text style={styles.textHeader}>Popular therapist</Text>
                <Text style={{ color: "#d4d4d7", fontWeight: "bold" }}>See all</Text>
            </View>
            <FlatList
                data={THERAPISTS}
                renderItem={({ item: { image, name, job, rate } }) => (
                    <Therapist image={image} name={name} job={job} rate={rate} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <BottomButton />
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "black",
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 20,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#495258",
    },
    therapistTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
});
