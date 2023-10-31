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
  CLEAR: "CLEAR",
  ADD_DOT: "ADD_DOT",
  DELETE: "DELETE",
};

const initialState = {
  displayNumber: 0,
  operator: "", // +, -, *, /
  previousNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case CALCULATOR_TYPES.CLEAR:
      return {
        ...state,
        displayNumber: 0,
        operator: "",
        previousNumber: 0,
      };
    case CALCULATOR_TYPES.DELETE:
      return {
        ...state,
        displayNumber: state.displayNumber.toString().slice(0, -1),
      };
    case CALCULATOR_TYPES.ADD_DOT:
      if (state.displayNumber.toString().includes(".")) {
        return state;
      }
      return {
        ...state,
        displayNumber: state.displayNumber + ".",
      };
    case CALCULATOR_TYPES.SELECT_NUMBER:
      return {
        ...state,
        displayNumber: state.displayNumber === 0 ? action.payload : state.displayNumber + action.payload,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      if (state.operator) {
        return state;
      }
      return {
        ...state,
        operator: action.payload,
        previousNumber: state.displayNumber,
        displayNumber: 0,
      };
    case CALCULATOR_TYPES.CALCULATE:
      let result = 0;
      switch (state.operator) {
        case "*":
          result = state.previousNumber * state.displayNumber;
          return {
            ...state,
            displayNumber: result,
            operator: "",
            previousNumber: 0,
          };
        case "-":
          result = state.previousNumber - state.displayNumber;
          return {
            ...state,
            displayNumber: result,
            operator: "",
            previousNumber: 0,
          };
        case "+":
          result = parseFloat(state.previousNumber) + parseFloat(state.displayNumber);
          return {
            ...state,
            displayNumber: result,
            operator: "",
            previousNumber: 0,
          };
        case "/":
          result = state.previousNumber / state.displayNumber;
          return {
            ...state,
            displayNumber: result,
            operator: "",
            previousNumber: 0,
          };
        case "%":
          result = state.previousNumber % state.displayNumber;
          return {
            ...state,
            displayNumber: result,
            operator: "",
            previousNumber: 0,
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
    dispatch({ type: CALCULATOR_TYPES.SELECT_NUMBER, payload: number });
  };

  const handleSelectOperator = (operator) => {
    dispatch({ type: CALCULATOR_TYPES.SELECT_OPERATOR, payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: CALCULATOR_TYPES.CALCULATE });
  };

  const handleClear = () => {
    dispatch({ type: CALCULATOR_TYPES.CLEAR });
  };

  const handleDot = () => {
    dispatch({ type: CALCULATOR_TYPES.ADD_DOT });
  };

  const handleDelete = () => {
    dispatch({ type: CALCULATOR_TYPES.DELETE });
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{ fontSize: 20 }}>
          {state.previousNumber} {state.operator}
        </Text>
        <View style={styles.capsule}>
          <Text style={styles.text}>{state.displayNumber}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Number text="C" color="gray" onPress={handleClear}></Number>
        <Number text="%" color="gray" onPress={handleSelectOperator}></Number>
        <Number text="◀️" color="gray" onPress={handleDelete}></Number>
        <Number text="/" color="white" onPress={handleSelectOperator}></Number>
      </View>
      <View style={styles.row}>
        <Number text="7" color="green" onPress={handleSelectNumber}></Number>
        <Number text="8" color="green" onPress={handleSelectNumber}></Number>
        <Number text="9" color="green" onPress={handleSelectNumber}></Number>
        <Number text="*" color="white" onPress={handleSelectOperator}></Number>
      </View>
      <View style={styles.row}>
        <Number text="4" color="green" onPress={handleSelectNumber}></Number>
        <Number text="5" color="green" onPress={handleSelectNumber}></Number>
        <Number text="6" color="green" onPress={handleSelectNumber}></Number>
        <Number text="-" color="white" onPress={handleSelectOperator}></Number>
      </View>
      <View style={styles.row}>
        <Number text="1" color="green" onPress={handleSelectNumber}></Number>
        <Number text="2" color="green" onPress={handleSelectNumber}></Number>
        <Number text="3" color="green" onPress={handleSelectNumber}></Number>
        <Number text="+" color="white" onPress={handleSelectOperator}></Number>
      </View>
      <View style={styles.row}>
        <Number text="AC" color="gray" onPress={handleClear}></Number>
        <Number text="0" color="green" onPress={handleSelectNumber}></Number>
        <Number text="." color="gray" onPress={handleDot}></Number>
        <Number text="=" color="white" onPress={handleCalculate}></Number>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#78c09d",
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
  display: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  capsule: {
    backgroundColor: "#78c09d",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
  },
});
