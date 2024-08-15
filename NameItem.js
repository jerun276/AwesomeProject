import { StyleSheet, View, Text, Pressable } from "react-native";

function NameItem(props) {
    return (

        <View style={styles.nameItem}>
            <Pressable
                onPress={props.onDelete}
                // android_ripple={{color: '#210466'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.nameText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    nameItem: {
        marginTop: 15,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: 'white',
    },
    nameText: {
        margin: 8,
        padding: 8,
        color: 'white',
    },
    pressedItem:{
        opacity: 0.5,
    },
})

module.exports = NameItem;