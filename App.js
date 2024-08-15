import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[nameText, setNameText] = useState("")

  function goalInputHandler(text) {
    setNameText(text)
  }

  function addNameHandler() {
    console.log(nameText)
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='Enter your name brother: ' />
        <Button
          onPress={addNameHandler}
          title='Add name' />
      </View>
      <View style={styles.listContainer}>
        <Text>List of Names</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appcontainer: {
    padding: 25,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 25,
    borderBottomColor: 'green',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight: 10,
    padding: 5,
  },
  listContainer: {
    flex: 4,
  }

});
