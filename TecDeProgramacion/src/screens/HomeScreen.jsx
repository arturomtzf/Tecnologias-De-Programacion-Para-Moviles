import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(navigation);
  const { canGoBack, goBack } = navigation;
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("Login", { name: "Arturo Martinez Fuentes" });
        }}
        title="Login"
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Go back"
        disabled={!canGoBack()}
      />
    </View>
  );
};

export default HomeScreen;
