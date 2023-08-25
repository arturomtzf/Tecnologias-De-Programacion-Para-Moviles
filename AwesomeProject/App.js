import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Touchable, Text, TouchableOpacity } from 'react-native';
import { StyledText } from './src/components/StyledText';

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText text='Custom Styled Text' bold/>
      <StyledText text='Chiquito' />
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Press')}>
        <Text>Botonbb</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 3,
    padding: 5,
  }
});
