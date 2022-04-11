import React, { createContext, useState } from 'react';

const Context = createContext();

function AuthProvider({ children }) {

    const [modalCadastroShow, setModalCadastroShow] = useState(false);
    const [modalEditarShow, setModalEditarShow] = useState(false);

    return (
        <Context.Provider value={{ 
            modalCadastroShow, setModalCadastroShow,
            modalEditarShow, setModalEditarShow
            }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };