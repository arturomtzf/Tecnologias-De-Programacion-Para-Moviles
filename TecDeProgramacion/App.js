import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Text, SafeAreaView, Alert, FlatList } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";
import Todo from "./src/components/Todo";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";
import AddButton from "./src/components/AddButton";

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [boolEdit, setBoolEdit] = useState(false);
    const [editId, setEditId] = useState("");
    const [todos, setTodos] = useState([
        {
            id: "1",
            name: "Tarea de Eder",
            isCompleted: false,
            createdAt: "2021-10-01T00:00:00.000Z",
            updatedAt: "",
        },
    ]);

    handleAddTodo = () => {
        if (inputValue === "") {
            return handleShowerror("El campo no puede estar vacio");
        }
        const existe = todos.some((todo) => todo.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase());
        if (existe) {
            return handleShowerror("El campo ya existe");
        }
        if (boolEdit) {
            handleEditConfirm();
            return;
        }
        const now = new Date();
        const createdDate = now.toISOString();
        setTodos([
            ...todos,
            {
                id: createdDate,
                name: inputValue,
                isCompleted: false,
                createdAt: createdDate,
                updatedAt: "",
            },
        ]);
        setInputValue("");
        // console.log(todos);
    };

    handleEditTodo = (id) => {
        todos.map((todo) => {
            if (todo.id === id) {
                setInputValue(todo.name);
                setBoolEdit(true);
                setEditId(id);
                return;
            }
        });
    };

    handleEditConfirm = () => {
        const newTodos = todos.map((todo) => {
            if (todo.id === editId) {
                todo.name = inputValue;
                todo.updatedAt = new Date().toISOString();
            }
            return todo;
        });
        setTodos(newTodos);
        setInputValue("");
        setBoolEdit(false);
    };

    handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    handleDoneTodo = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    handleShowerror = (error) => {
        Alert.alert("Error", error, [
            {
                text: "Aceptar",
                onPress: () => console.log("Aceptar Pressed"),
                style: "ok",
            },
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Todo List</Text>
            <View style={{ flexDirection: "row", margin: 20, gap: 20, marginBottom: 0 }}>
                <TodoInput value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder="Add a task" />
                <AddButton onPress={handleAddTodo} editMode={boolEdit} />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, name, isCompleted, createdAt, updatedAt } }) => {
                    return (
                        <Todo
                            id={id}
                            name={name}
                            isCompleted={isCompleted}
                            handleDelete={handleDeleteTodo}
                            handleComplete={handleDoneTodo}
                            handleEdit={handleEditTodo}
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
