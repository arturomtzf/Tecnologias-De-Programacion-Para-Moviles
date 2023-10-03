import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Recomendados = ({ item }) => {
  return (
    <View style={{ margin: 2 }}>
      <Image
        source={{ uri: item.item.image }}
        style={styles.image}
        resizeMode='cover'
      />
      <MaterialCommunityIcons
        name='square-rounded'
        size={40}
        color='white'
        style={styles.icon}
      />
    </View>
  );
};

export default Recomendados;

const styles = StyleSheet.create({
  image: {
    height: 196,
    width: 196,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});
