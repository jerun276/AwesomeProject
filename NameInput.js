import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

function NameInput(props) {
    const [nameText, setNameText] = useState("")

    function goalInputHandler(text) {
        setNameText(text)
    }

    function addNameHandler(){
        props.onAddName(nameText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                style={styles.textInput}
                placeholder='Enter your name brother: ' />
            <Button
                onPress={addNameHandler}
                title='Add name' />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

module.exports = NameInput;