import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text, SafeAreaView, Alert, FlatList } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";
import Todo from "./src/components/Todo";
import TodoInput from "./src/components/TodoInput";
import AddButton from "./src/components/AddButton";
import { useTodos } from "./src/hooks/useTodos";

export default function App() {
    const { input, todos, edit, setInput, handleAddTodo, handleDeleteTodo, handleDoneTodo, handleEditTodo, handleUpdateTodo } =
        useTodos();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Todo List</Text>
            <View style={{ flexDirection: "row", margin: 20, gap: 20, marginBottom: 0 }}>
                <TodoInput value={input} onChangeText={(text) => setInput(text)} placeholder="Add a task" />
                <AddButton onPress={handleAddTodo} editMode={edit} onPressEdit={handleUpdateTodo} />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, name, done, createdAt, updatedAt } }) => {
                    return (
                        <Todo
                            id={id}
                            name={name}
                            isCompleted={done}
                            handleDelete={() => handleDeleteTodo(id)}
                            handleComplete={() => handleDoneTodo(id)}
                            handleEdit={() => handleEditTodo(id)}
                            createdAt={createdAt}
                            updatedAt={updatedAt}
                        />
                    );
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
