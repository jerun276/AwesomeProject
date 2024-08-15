import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container1}>
        Welcome to the world of Jerun maame
      </Text>
      <Text style={styles.container1}>
        Jerun Kingston
      </Text>
      <View>
        <Button title='Jerun' />
      </View>
      <StatusBar style="auto" />
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
  container1: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
    fontSize: 15,
  }
});
