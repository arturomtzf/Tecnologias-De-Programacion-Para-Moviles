import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Text, SafeAreaView, Modal, FlatList } from "react-native";
import { Provider } from "react-redux";
import TodoScreen from "./src/screens/TodoScreen";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({});
