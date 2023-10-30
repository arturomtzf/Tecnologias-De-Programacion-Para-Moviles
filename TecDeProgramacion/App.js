import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/authContext";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Account from "./src/screens/Account";
import Number from "./src/component/Number";
import { useReducer } from "react";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
};

const initialState = {
  displayNumber: 0,
  operator: "", // +, -, *, /
  previousNumber: 0,
  currentNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      return {
        ...state,
        currentNumber: action.payload,
        displayNumber: action.payload,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousNumber: state.currentNumber,
      };
    case CALCULATOR_TYPES.CALCULATE:
      let result = 0;
      switch (state.operator) {
        case "*":
          result = state.previousNumber * state.currentNumber;
          return {
            ...state,
            displayNumber: result,
            currentNumber: result,
          };
        case "-":
          result = state.previousNumber - state.currentNumber;
          return {
            ...state,
            displayNumber: result,
            currentNumber: result,
          };
      }
    default:
      return state;
  }
}

// const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectNumber = (number) => {
    console.log(number);
    dispatch({ type: CALCULATOR_TYPES.SELECT_NUMBER, payload: number });
  };

  const handleSelectOperator = (operator) => {
    console.log(operator);
    dispatch({ type: CALCULATOR_TYPES.SELECT_OPERATOR, payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: CALCULATOR_TYPES.CALCULATE });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <Number text="7" role="number" onPress={handleSelectNumber}></Number>
        <Number text="8" role="number" onPress={handleSelectNumber}></Number>
        <Number text="9" role="number" onPress={handleSelectNumber}></Number>
        <Number text="/" role="operator" onPress={handleSelectOperator}></Number>
      </View>
      <View style={styles.row}>
        <Number text="4" role="number" onPress={handleSelectNumber}></Number>
        <Number text="5" role="number" onPress={handleSelectNumber}></Number>
        <Number text="6" role="number" onPress={handleSelectNumber}></Number>
        <Number text="*" role="operator" onPress={handleSelectOperator}></Number>
      </View>
      <View style={styles.row}>
        <Number text="1" role="number" onPress={handleSelectNumber}></Number>
        <Number text="2" role="number" onPress={handleSelectNumber}></Number>
        <Number text="3" role="number" onPress={handleSelectNumber}></Number>
        <Number text="-" role="operator" onPress={handleSelectOperator}></Number>
      </View>
      <View>
        <Number text="=" role="operator" onPress={handleCalculate}></Number>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  text: {
    fontSize: 80,
    textAlign: "right",
  },
});
