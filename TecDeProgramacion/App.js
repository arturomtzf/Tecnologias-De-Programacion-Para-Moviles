import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";
import Todo from "./src/components/Todo";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";
import AddButton from "./src/components/AddButton";

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([
        {
            id: "1",
            name: "Tarea de Eder",
            isCompleted: false,
        },
    ]);

    const handleAddTodo = () => {
        console.log(todos);
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

    const handleCompleteTodo = (id) => {
        console.log("handleCompleteTodo");
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            } else {
                return todo;
            }
        });
        setTodos(newTodos);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Todo List</Text>
            <View style={{ flexDirection: "row", margin: 20, gap: 20, marginBottom: 0 }}>
                <TodoInput value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder="Add a task" />
                <AddButton onPress={handleAddTodo} />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { name } }) => {
                    return <Todo name={name} />;
                }}
                ItemSeparatorComponent={() => {
                    return <View style={{ height: 1, backgroundColor: "#000", marginTop: 10 }} />;
                }}
                style={{ marginHorizontal: 10, flex: 1 }}
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
    titulo: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});
