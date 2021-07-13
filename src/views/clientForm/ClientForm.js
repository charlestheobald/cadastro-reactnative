import React, {useContext, useState} from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Input} from "react-native-elements";


import clientService from "../../services/clientService";
import ClientContext from "../../context/ClientContext";
import {Style} from "./Styles";

export default ({route, navigation}) => {

    const {reload, setReload} = useContext(ClientContext);
    const [cliente, setCliente] = useState(route.params ? route.params : {});
    const [isPost, setIsPost] = useState(!route.params);

    //Erros
    const [errorNome, setErrorNome] = useState(null)
    const [errorSobrenome, setErrorSobrenome] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorNascimento, setErrorNascimento] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorImagem, setErrorImagem] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [errorCep, setErrorCep] = useState(null)
    const [errorRua, setErrorRua] = useState(null)
    const [errorNumero, setErrorNumero] = useState(null)
    const [errorBairro, setErrorBairro] = useState(null)
    const [errorCidade, setErrorCidade] = useState(null)
    const [errorEstado, setErrorEstado] = useState(null)

    const validate = () => {
        setErrorNome(null)
        setErrorSobrenome(null)
        setErrorCpf(null)
        setErrorNascimento(null)
        setErrorEmail(null)
        setErrorTelefone(null)
        setErrorCep(null)
        setErrorRua(null)
        setErrorNumero(null)
        setErrorBairro(null)
        setErrorCidade(null)
        setErrorEstado(null)

        let error = false

        if (cliente.nome == null || cliente.nome === "") {
            setErrorNome("O campo nome é obrigatório")
            error = true
        }
        if (cliente.sobrenome == null || cliente.sobrenome === "") {
            setErrorSobrenome("O campo sobrenome é obrigatório")
            error = true
        }
        if (cliente.cpf == null || cliente.cpf === "") {
            setErrorCpf("O campo CPF é obrigatório")
            error = true
        }
        if (cliente.nascimento == null || cliente.nascimento === "") {
            setErrorNascimento("O campo nascimento é obrigatório")
            error = true
        }
        if (cliente.email == null || cliente.email === "") {
            setErrorEmail("O campo E-mail é obrigatório")
            error = true
        }
        if (cliente.urlImagem == null || cliente.urlImagem === "") {
            cliente.urlImagem = "https://www.dioceseofputtur.com/img/avatar.jpg"
        }
        if (cliente.telefone == null || cliente.telefone === "") {
            setErrorTelefone("O campo telefone é obrigatório")
            error = true
        }
        if (cliente.cep == null || cliente.cep === "") {
            setErrorCep("O campo CEP é obrigatório")
            error = true
        }
        if (cliente.rua == null || cliente.rua === "") {
            setErrorRua("O campo rua é obrigatório")
            error = true
        }
        if (cliente.numero == null || cliente.numero === "") {
            setErrorNumero("O campo numero é obrigatório")
            error = true
        }
        if (cliente.bairro == null || cliente.bairro === "") {
            setErrorBairro("O campo bairro é obrigatório")
            error = true
        }
        if (cliente.cidade == null || cliente.cidade === "") {
            setErrorCidade("O campo cidade é obrigatório")
            error = true
        }
        if (cliente.estado == null || cliente.estado === "") {
            setErrorEstado("O campo estado é obrigatório")
            error = true
        }


        return !error;
    }

    function postClient(cliente) {
        clientService.postClient(cliente).then(res => {
            console.log(res.data);
            setReload(!reload);
        }).catch(e => {
            console.log("Não foi possível cadastrar o cliente", e);
        });
    }

    function putClient(id, cliente) {
        clientService.putClient(id, cliente).then(res => {
            console.log(res.data);
            setReload(!reload);
        }).catch(e => {
            console.log("Não foi possível atualizar o cliente", e);
        });
    }


    return (
        <ScrollView style={Style.form}>

            <Input
                style={Style.input}
                onChangeText={nome => setCliente({...cliente, nome})}
                placeholder={"Nome"}
                value={cliente.nome}
                errorMessage={errorNome}
            />

            <Input
                style={Style.input}
                onChangeText={sobrenome => setCliente({...cliente, sobrenome})}
                placeholder={"Sobrenome"}
                value={cliente.sobrenome}
                errorMessage={errorSobrenome}
            />

            <Input
                style={Style.input}
                onChangeText={cpf => setCliente({...cliente, cpf})}
                placeholder={"CPF"}
                value={cliente.cpf}
                errorMessage={errorCpf}
            />

            <Input
                style={Style.input}
                onChangeText={nascimento => setCliente({...cliente, nascimento})}
                placeholder={"Data de nascimento yyyy-MM-dd"}
                value={cliente.nascimento}
                errorMessage={errorNascimento}
            />

            <Input
                style={Style.input}
                onChangeText={email => setCliente({...cliente, email})}
                placeholder={"E-mail"}
                value={cliente.email}
                errorMessage={errorEmail}
            />

            <Input
                style={Style.input}
                onChangeText={urlImagem => setCliente({...cliente, urlImagem})}
                placeholder={"URL Imagem"}
                value={cliente.urlImagem}
                errorMessage={errorImagem}
            />

            <Input
                style={Style.input}
                onChangeText={telefone => setCliente({...cliente, telefone})}
                placeholder={"Telefone"}
                value={cliente.telefone}
                errorMessage={errorTelefone}
            />

            <Input
                style={Style.input}
                onChangeText={cep => setCliente({...cliente, cep})}
                placeholder={"CEP"}
                value={cliente.cep}
                errorMessage={errorCep}
            />

            <Input
                style={Style.input}
                onChangeText={rua => setCliente({...cliente, rua})}
                placeholder={"Rua"}
                value={cliente.rua}
                errorMessage={errorRua}
            />

            <Input
                style={Style.input}
                onChangeText={numero => setCliente({...cliente, numero})}
                placeholder={"Número"}
                value={cliente.numero}
                errorMessage={errorNumero}
            />

            <Input
                style={Style.input}
                onChangeText={bairro => setCliente({...cliente, bairro})}
                placeholder={"Bairro"}
                value={cliente.bairro}
                errorMessage={errorBairro}
            />

            <Input
                style={Style.input}
                onChangeText={cidade => setCliente({...cliente, cidade})}
                placeholder={"Cidade"}
                value={cliente.cidade}
                errorMessage={errorCidade}
            />

            <Input
                style={Style.input}
                onChangeText={estado => setCliente({...cliente, estado})}
                placeholder={"Estado"}
                value={cliente.estado}
                errorMessage={errorEstado}
            />

            <View style={Style.buttonView}>
                <TouchableOpacity
                    style={Style.button}
                    title={"Salvar"}
                    onPress={() => {
                        if (validate()) {
                            isPost === true ? postClient(cliente) : putClient(cliente.id, cliente);
                            navigation.goBack();
                        }
                    }}
                >
                    <Text style={Style.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

