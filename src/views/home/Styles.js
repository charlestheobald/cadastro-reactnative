import {StyleSheet} from "react-native";

export const Style = StyleSheet.create({
    home: {
        backgroundColor: "#e9d8f2",
        flex: 1,
        alignItems: "center",
    },

    image: {
        height: 500,
        width: 500
    },

    titulo: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 30,
        paddingBottom: 40
    },

    button: {
        width: 200,
        height: 50,
        backgroundColor: "purple",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#fff"
    }

});
