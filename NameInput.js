import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

function NameInput(props) {
    const [nameText, setNameText] = useState("")

    function goalInputHandler(text) {
        setNameText(text)
    }

    function addNameHandler() {
        props.onAddName(nameText);
        props.onClose();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('./assets/Images/logo.png')} />
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Enter your name brother: ' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color="#f31"
                            title='Cancel' onPress={props.onClose} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color="#5e0acc"
                            onPress={addNameHandler}
                            title='Add name' />
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
        flex: 1,
        backgroundColor: '#1A0037',

    },
    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        width: '80%',
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#e4d0ff'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 150,
        marginHorizontal: 8
    },
    image: {
        width: 150,
        height: 150,
        margin: 20,
    }
})

module.exports = NameInput;