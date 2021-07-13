import React, {createContext, useState} from "react";

const ClientContext = createContext({});

export function ClientProvider({children}) {

    const [reload, setReload] = useState(false);

    return (
        <ClientContext.Provider value={{
            reload,
            setReload,
        }}>
            {children}
        </ClientContext.Provider>
    );
}

export default ClientContext;
