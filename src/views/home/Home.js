import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Style} from "./Styles";


export default props => {

    return (
        <View style={Style.home}>
            <Image source={require("../../assets/images/imgHome.png")} style={Style.image}/>
            <Text style={Style.titulo}>FourClient</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("UserList")} style={Style.button}>
                <Text style={Style.buttonText}> Clientes </Text>
            </TouchableOpacity>
        </View>
    );
}
