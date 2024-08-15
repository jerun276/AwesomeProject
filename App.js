import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import NameItem from './NameItem';
import NameInput from './NameInput';

export default function App() {
  const [names, setNames] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addNameHandler(nameText) {
    setNames((currentNames) => [...currentNames, nameText])
  }

  function deleteItem(index) {
    const newNames = names.filter((el, i) => i != index)
    setNames(newNames);
  }

  function startAddNameHandler() {
    setIsModalVisible(true);
  }

  function endAddNameHandler() {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Name' color="#5e0acc" onPress={startAddNameHandler}/>
      <NameInput onClose={endAddNameHandler} visible={isModalVisible} onAddName={addNameHandler} />
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
    padding: 50,
    flex: 1,
  },
  listContainer: {
    flex: 4,
  },

});
