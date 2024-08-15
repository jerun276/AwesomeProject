import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NameItem from './NameItem';
import NameInput from './NameInput';

export default function App() {
  const [names, setNames] = useState([])



  function addNameHandler(nameText) {
    setNames((currentNames) => [...currentNames, nameText])
  }

  function deleteItem(index) {
    const newNames = names.filter((el, i) => i != index)
    setNames(newNames);
  }

  return (
    <View style={styles.appContainer}>
      <NameInput onAddName={addNameHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={names}
          renderItem={(nameData) => {
            return <NameItem text={nameData.item} onDelete={() => deleteItem(nameData.index)} />
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
