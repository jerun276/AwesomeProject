import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import NameItem from './NameItem';
import NameInput from './NameInput';
import { StatusBar } from 'expo-status-bar';

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
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Name' color="#A070D6" onPress={startAddNameHandler} />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    backgroundColor: '#1A0037',
  },
  listContainer: {
    flex: 4,
  },

});
