import React, {useEffect, useState} from "react";
import {Image, Text, View} from "react-native";
import clientService from "../../services/clientService";
import {Style} from "./Styles"


export default ({route}) => {
    const clientID = route.params;
    const [client, setClient] = useState({});

    useEffect(() => {

        clientService.getClientById(clientID).then(res => {
            setClient(res.data.Dados);

        }).catch(e => {
            console.log("Não foi possível encontrar o cliente", e);
        });
    }, []);

    return (
        <View style={Style.content}>
            <View style={Style.header}>
                <Image source={{uri: client.urlImagem}} style={Style.imagem}/>
                <Text style={Style.titulo}>{client.nome} {client.sobrenome}</Text>
            </View>
            <View style={Style.line}/>

            <View style={Style.informationContainer}>
                <Text style={{fontSize: 18, paddingBottom: 6, fontFamily: 'Roboto-Light'}}>Informações:</Text>
                <Text>CPF: {client.cpf}</Text>
                <Text>Data de Nascimento: {client.nascimento}</Text>
                <Text>Tell: {client.telefone}</Text>
                <Text>Email: {client.email}</Text>

                <View style={Style.line2}/>


                <Text
                    style={{fontSize: 18, paddingBottom: 6, paddingTop: 8, fontFamily: 'Roboto-Light'}}>Endereço:</Text>
                <Text>CEP: {client.cep}</Text>
                <Text>Rua: {client.rua}</Text>
                <Text>Número: {client.numero}</Text>
                <Text>Bairro: {client.bairro}</Text>
                <Text>Cidade: {client.cidade}</Text>
                <Text>Estado: {client.estado}</Text>
            </View>


        </View>
    );
}
