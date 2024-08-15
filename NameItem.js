import { StyleSheet, View, Text } from "react-native";

function NameItem(props) {
    return (
        <View style={styles.nameItem}>
            <Text style={styles.nameText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nameItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: 'white',
    },
    nameText: {
        color: 'white',
    },
})

module.exports = NameItem;