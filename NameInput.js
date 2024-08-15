import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal } from "react-native"

function NameInput(props) {
    const [nameText, setNameText] = useState("")

    function goalInputHandler(text) {
        setNameText(text)
    }

    function addNameHandler() {
        props.onAddName(nameText)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Enter your name brother: ' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            onPress={addNameHandler}
                            title='Add name' />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
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
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 150,
        marginHorizontal: 8
    },
})

module.exports = NameInput;