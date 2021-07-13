import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserList from "./views/clientList/ClientList";
import UserForm from "./views/clientForm/ClientForm";
import ClientData from "./views/clientData/ClientData";
import {Button, Icon} from "react-native-elements";
import {ClientProvider} from "./context/ClientContext";
import Home from "./views/home/Home";

const Stack = createStackNavigator();

export default props => {
    return (
        <NavigationContainer>
            <ClientProvider>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: "Home",
                        }}
                    />
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({navigation}) => {
                            return {
                                title: "Lista de Clientes", headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white"/>}
                                    />
                                ),
                            };
                        }}
                    />

                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Formulário de Clientes",
                        }}
                    />
                    <Stack.Screen
                        name="ClientData"
                        component={ClientData}
                        options={{
                            title: "Dados do Cliente",
                        }}
                    />
                </Stack.Navigator>
            </ClientProvider>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: 'purple',
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};
