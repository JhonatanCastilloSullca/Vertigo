import React, { createContext, useState, useEffect } from "react";
import { useFetch } from "../Hook/useFetch";

export const GeneralContext = createContext();

const useGeneralData = (url, requestOptions) => {
    const { data, loading, error } = useFetch(url, requestOptions);
    const [general, setGeneral] = useState(null);

    useEffect(() => {
        if (!loading && !error && data) {
            setGeneral(data);
        }
    }, [data, loading, error]);

    return { general, loading, error };
};

export const GeneralProvider = ({ children }) => {
    const requestOptions = {
        method: 'POST',
        token: 'tu_token_aqui',
        body: JSON.stringify({})
    };

    const { general, loading, error } = useGeneralData("http://192.168.1.32/api/general", requestOptions);

    // Mantener el loader mientras loading es true
    if (loading) {
        return <div>Cargando...</div>;
    }

    // Si hay un error de red, mostrar el loader también
    if (error && !error.message) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Cargando...</div>;

    }

    if (!general) {
        return <div>Cargando...</div>;

    }

    return (
        <GeneralContext.Provider value={{ general }}>
            {children}
        </GeneralContext.Provider>
    );
};
