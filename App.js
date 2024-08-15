import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your name brother: '/>
        <Button title='Add name'/>
      </View>
      <View>
        <Text>List of Names</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appcontainer :{
    padding: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight: 10,
    padding: 5,
  }

});
