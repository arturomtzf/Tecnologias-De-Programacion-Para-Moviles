import { StyleSheet, View, Pressable, Text, SafeAreaView, Modal, FlatList } from "react-native";
import Constants from "expo-constants";
import Todo from "../components/Todo";
import TodoInput from "../components/TodoInput";
import AddButton from "../components/AddButton";
import { useTodos } from "../hooks/useTodos";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const TodoScreen = () => {
  const {
    input,
    todos,
    todo,
    edit,
    setInput,
    handleAddTodo,
    handleDeleteTodo,
    handleDoneTodo,
    handleEditTodo,
    handleUpdateTodo,
    modalVisible,
    handleView,
    handleCloseModal,
  } = useTodos();
  const dispatch = useDispatch();
  const { todos: todosRedux } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        backgroundColor="rgba(0, 0, 0, 1)"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Name: </Text>
              <Text style={styles.modalText}>{todo.name}</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Done: </Text>
              <Text style={styles.modalText}>{todo.done ? "Yes" : "No"}</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Created At: </Text>
              <Text style={styles.modalText}>{todo.createdAt}</Text>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Updated At: </Text>
              <Text style={styles.modalText}>{todo.updatedAt === "" ? "Not updated" : todo.updatedAt}</Text>
            </View>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={handleCloseModal}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
              handleView={() => handleView(id)}
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
    </View>
  );
};

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  modalContainer: {
    flexDirection: "row",
  },
});

export default TodoScreen;
