import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";
import Todo from "./src/components/Todo";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        console.log("handleAddTodo");
        if (inputValue === "") {
            return;
        } else {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    name: inputValue,
                    isCompleted: false,
                },
            ]);
            setInputValue("");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center", color: "white" }}>Todo List</Text>
            <View style={{ flexDirection: "row", margin: 20, gap: 20 }}>
                <TodoInput value={inputValue} onChangeText={(text) => setInputValue(text)} />
                <CustomButton text="Add Task" onPress={handleAddTodo} />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { name } }) => {
                    return <Todo name={name} />;
                }}
                style={{ marginHorizontal: 20, flex: 1 }}
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#2a6335",
        height: "100%",
        // justifyContent: "center",
    },
});
