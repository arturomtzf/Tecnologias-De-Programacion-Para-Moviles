import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.container}>
      <Feather name='search' size={24} color='white' />
      <TextInput placeholder={'Search'} placeholderTextColor={'#fff'} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    marginHorizontal: 15,
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
});
