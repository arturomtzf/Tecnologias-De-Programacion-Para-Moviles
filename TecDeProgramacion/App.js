import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useScrollToTop } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { useEffect } from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home' // ruta inicial
          barStyle={{ height: 70, backgroundColor: '#000' }} // estilos de la barra de navegacion
          activeColor='#fff' // color de los iconos activos
          inactiveColor='#3e2465' // color de los iconos inactivos
          labeled={true} // muestra el texto de los iconos
          shifting={true} // oculta los textos de los iconos y aparecen al hacer click
          backBehavior='history' // comportamiento del boton de atras
        >
          <Tab.Screen
            name='Home'
            component={Home} // componente a renderizar
            options={{
              tabBarLabel: 'Home', //Texto que aparece debajo del icono
              tabBarIcon: ({ color }) => (
                <AntDesign name='home' size={24} color={color} />
              ), // renderizar icono
              tabBarColor: '#fff', // color de la barra de navegacion
              tabBarBadge: 3, // muestra un badge con el numero de notificaciones
            }}
          />
          <Tab.Screen
            name='Login'
            component={Login}
            options={{
              tabBarLabel: 'Para ti',
              tabBarIcon: ({ color }) => (
                <AntDesign name='search1' size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },
});
