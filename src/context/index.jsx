import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    
    const [cuenta, setCuenta] = useState({});

    const [sesion, setSesion] = useState(false);

    const [saludo, setSaludo] = useState("Holis");

    return (
        <RestaurantContext.Provider value={{
            cuenta,
            setCuenta,
            sesion,
            setSesion,
            saludo,
            setSaludo
        }} >
            { children }
        </RestaurantContext.Provider>
    )
}