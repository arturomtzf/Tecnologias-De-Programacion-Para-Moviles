import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Login from "./src/screens/Login";
import { Person } from "./src/components/Person/Person";

export default function App() {
    const DATA = [
        { id: 0, name: "Juan", lastName: "Perez" },
        { id: 1, name: "Pedro", lastName: "Rivera" },
        { id: 2, name: "Maria", lastName: "Garcia" },
        { id: 3, name: "Jose", lastName: "Dominguez" },
        { id: 4, name: "Luis", lastName: "Manriquez" },
        { id: 5, name: "Ana", lastName: "Martinez" },
        { id: 6, name: "Luisa", lastName: "Juarez" },
    ];

    return (
        <View style={styles.container}>
            {/* <Login /> */}
            <FlatList
                data={DATA}
                ItemSeparatorComponent={<Text>Separador</Text>}
                keyExtractor={({id}) => id} //Desestructuramos el id de cada item
                renderItem={(
                    { item: { name, lastName }, index } // Para destructurar item
                ) => <Person name={name} lastName={lastName} index={index} />}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
