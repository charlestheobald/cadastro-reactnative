import httpCommon from "../httpCommon";

const getAllClients = () => {
    return httpCommon.get(`listar-todos`);
};

const getClientById = (id) => {
    return httpCommon.get(`buscar/${id}`);
};

const deleteClient = (id) => {
    return httpCommon.delete(`deletar/${id}`);
};

const postClient = (client) => {
    return httpCommon.post(`cadastrar`, client);
};

const putClient = (id, client) => {
    return httpCommon.put(`atualizar/${id}`, client);
};

export default {
    getAllClients,
    getClientById,
    deleteClient,
    postClient,
    putClient,
};
