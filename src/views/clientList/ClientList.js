import React, {useContext, useEffect, useState} from "react";
import {Alert, FlatList, View} from "react-native";

import {Avatar, Button, Icon, ListItem} from "react-native-elements";
import clientService from "../../services/clientService";
import ClientContext from "../../context/ClientContext";
import {Style} from "./Styles";


export default props => {

    const {reload, setReload} = useContext(ClientContext);
    const [clientList, setClientList] = useState([]);


    useEffect(() => {
        clientService.getAllClients().then(res => {

            setClientList(res.data.Dados);
        }).catch(e => {
            console.log("Não foi possível carregar a lista de clientes", e);
        });
    }, [reload]);

    function deleteClient(id) {
        clientService.deleteClient(id).then(res => {
            console.log(res.data);
            setReload(!reload);
        }).catch(e => {
            console.log("Não foi possível deletar o cliente", e);
        });
    }

    function confirmClienteDeletion(cliente) {
        Alert.alert("Excluir Cliente", "Deseja excluir o cliente?", [
            {
                text: "Sim",
                onPress() {
                    deleteClient(cliente.id);
                },
            },
            {
                text: "Não",
            },
        ]);
    }

    function getActions(cliente) {

        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", cliente)}
                    type="clear"
                    icon={<Icon name={"edit"} size={25} color={"purple"}/>}
                />
                <Button
                    onPress={() => confirmClienteDeletion(cliente)}
                    type="clear"
                    icon={<Icon name={"delete"} size={25} color={"red"}/>}
                />
            </>
        );
    }


    function getClienteItem({item: cliente}) {
        return (
            <ListItem
                key={cliente.id}
                bottomDivider
                onPress={() => props.navigation.navigate("ClientData", cliente.id)}
            >
                <ListItem.Content style={Style.content}>
                    <Avatar size={"medium"} rounded source={{uri: cliente.urlImagem}}/>
                    <View style={Style.titulos}>
                        <ListItem.Title style={Style.titulo}>{cliente.nome} {cliente.sobrenome}</ListItem.Title>
                        <ListItem.Subtitle style={Style.subtitulo}>{cliente.email}</ListItem.Subtitle>
                    </View>


                    <>{getActions(cliente)}</>
                </ListItem.Content>
            </ListItem>

        );
    }


    return (
        <
            View>
            < FlatList
                keyExtractor={cliente => cliente.id.toString()}
                data={clientList}
                renderItem={getClienteItem}
            />
        </View>
    );
}
