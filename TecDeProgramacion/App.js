import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Login from "./src/screens/Login";
import { Person } from "./src/components/Person/Person";

export default function App() {
    const DATA = [
        { id: 0, name: "Juan", lastName: "Perez", image: "https://picsum.photos/200" },
        { id: 1, name: "Presiona", lastName: "Me", image: "https://picsum.photos/201" },
        { id: 2, name: "Maria", lastName: "Garcia", image: "https://picsum.photos/202" },
        { id: 3, name: "Jose", lastName: "Gomez", image: "https://picsum.photos/203" },
        { id: 4, name: "Eder", lastName: "Ruiz", image: "https://picsum.photos/204" },
        { id: 5, name: "Ana", lastName: "Martinez", image: "https://picsum.photos/205" },
        { id: 6, name: "Luisa", lastName: "Juarez", image: "https://picsum.photos/206" },
    ];

    return (
        <View style={styles.container}>
            {/* <Login /> */}
            <FlatList
                data={DATA}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                keyExtractor={({ id }) => id} //Desestructuramos el id de cada item
                renderItem={(
                    { item: { name, lastName, image }, index } // Para destructurar item
                ) => <Person name={name} lastName={lastName} index={index} imagen={image} />}
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
