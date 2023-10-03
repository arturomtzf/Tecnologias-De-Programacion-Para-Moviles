import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Search from '../components/Search';
import { DATA } from '../data/HomeData';
import Recomendados from '../components/Recomendados';

const Login = ({ route }) => {
  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <Search />
      <FlatList
        data={DATA}
        renderItem={item => <Recomendados item={item} />}
        style={styles.imageContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Login;
