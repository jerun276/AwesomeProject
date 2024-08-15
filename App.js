import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [nameText, setNameText] = useState("")
  const [names, setNames] = useState([])

  function goalInputHandler(text) {
    setNameText(text)
  }

  function addNameHandler() {
    setNames((currentNames) => [...currentNames, nameText])
  }

  return (
    <View style={styles.appContainer}>
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
        <FlatList
          data={names}
          renderItem={(namesData) => {
            return (
              <Text style={styles.nameItem}>{namesData.item}</Text>
            )
          }
          }
        />
        {/* {names.map((name, i) => <Text style={styles.nameItem} key={i}>{name}</Text>)}*/}
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
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
  },
  nameItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: 'white',
  },

});
