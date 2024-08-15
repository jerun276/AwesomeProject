import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import NameItem from './NameItem';
import NameInput from './NameInput';

export default function App() {
  const [names, setNames] = useState([])

  

  function addNameHandler(nameText) {
    setNames((currentNames) => [...currentNames, nameText])
  }

  return (
    <View style={styles.appContainer}>
      <NameInput onAddName={addNameHandler}/>
      <View style={styles.listContainer}>
        <FlatList
          data={names}
          renderItem={(nameData) => {
            return <NameItem text={nameData.item}/>
          }
          }
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 25,
    flex: 1,
  },
  listContainer: {
    flex: 4,
  },

});
