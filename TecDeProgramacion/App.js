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
      <View style={styles.display}>
        <Text style={{fontSize: 20}}>
          {state.previousNumber} {state.operator}
        </Text>
        <View style={styles.capsule}>
          <Text style={styles.text}>{state.displayNumber}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Number text="AC" color="gray"></Number>
        <Number text="%" color="gray"></Number>
        <Number text="◀️" color="gray"></Number>
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
        <Number text="🆒" color="gray" onPress={handleCalculate}></Number>
        <Number text="0" color="green" onPress={handleCalculate}></Number>
        <Number text="." color="gray" onPress={handleCalculate}></Number>
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
