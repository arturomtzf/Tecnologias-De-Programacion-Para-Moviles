import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SymptomCard = ({ symptom }) => {
    const symptopmName = symptom === "none" ? "I'm fine" : symptom;
    const symptomIcon = symptom === "none" ? "😀" : symptom === "fever" ? "😷" : "🤧";
    return (
        <View style={styles.symptomsContainer}>
            <Text>{symptomIcon}</Text>
            <Text style={styles.symptomText}>{symptopmName}</Text>
        </View>
    );
};

export default SymptomCard;

const styles = StyleSheet.create({
    symptomsContainer: {
        backgroundColor: "#c6ceff",
        width: 150,
        // paddingHorizontal: 5,
        paddingVertical: 8,
        borderRadius: 10,
        marginTop: 10,
        marginRight: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    symptomText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#2263df",
        textAlign: "center",
        textTransform: "capitalize",
    },
});
