import {StyleSheet} from "react-native";

export const Style = StyleSheet.create({

    content: {
        flex: 1,
        backgroundColor: '#e9d8f2',
        flexDirection: "column",
    },

    header: {
        alignItems: "center",
    },

    titulo: {
        fontSize: 20,
        fontFamily: 'Anton-Regular',
    },


    imagem: {
        width: 200,
        height: 200,
        borderRadius: 100,
        paddingTop: 100,
        marginTop: 10,
        marginBottom: 10

    },

    informationContainer: {

        paddingRight: 12,
        paddingLeft: 12,
        borderRadius: 20,
        fontFamily: 'Roboto-Light'

    },


    line: {
        borderBottomColor: '#d2d2',
        borderBottomWidth: 2
    },

    line2: {
        borderBottomColor: '#d2d2',
        borderBottomWidth: 2,
        marginTop: 10
    }

});
